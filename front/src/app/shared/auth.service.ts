import { Injectable } from '@angular/core';
import { Credentials, Token, TokenService } from "../core/backend";
import { HttpErrorResponse } from "@angular/common/http";
import { map, Observable, shareReplay, tap } from "rxjs";
import { EnvService } from "./env.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  error: string = '';

  constructor(
    private tokenService: TokenService,
    private envService: EnvService,
  ) {
  }

  login(credentials: Credentials): Observable<boolean> {
    return this.tokenService.postCredentialsItem(credentials)
      .pipe(
        tap({
            next: (token: Token) => {
              console.log('Logged in successfully!');
              this.storeAccessToken(token);
              shareReplay(1)
            },
            error: (error: HttpErrorResponse) => {
              this.error = error.error.message;
            },
          },
        ),
        map(() => this.isLoggedIn())
      );
  }

  private storeAccessToken(token: Token) {
    if (token.token) {
      localStorage.setItem(this.envService.tokenStorageKey, token.token);
    }
  }

  logout() {
    localStorage.removeItem(this.envService.tokenStorageKey);
  }

  public isLoggedIn() {
    return this.getAccessToken() !== null;
  }

  public getAccessToken() {
    return localStorage.getItem(this.envService.tokenStorageKey)
  }
}
