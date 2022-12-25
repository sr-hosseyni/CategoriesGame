import { Injectable } from '@angular/core';
import { Configuration, Credentials, Token, TokenService } from "../core/backend";
import { HttpErrorResponse } from "@angular/common/http";
import { shareReplay } from "rxjs";
import { EnvService } from "./env.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  error: string = '';

  constructor(
    private tokenService: TokenService,
    private envService: EnvService,
    // private apiConfiguration: Configuration
  ) {
  }

  login(credentials: Credentials) {
    return this.tokenService.postCredentialsItem(credentials)
      .subscribe({
        next: (token: Token) => {
          console.log('Logged in successfully! TOKEN=' + token.token);
          this.storeAccessToken(token);
          shareReplay(1)
          // @todo call somehow next subscriber here to be able to set action in the login component
        },
        error: (error: HttpErrorResponse) => {
          this.error = error.error.message;
        }
      });
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
    return !!this.getAccessToken();
  }

  public getAccessToken() {
    return localStorage.getItem(this.envService.tokenStorageKey)
  }
}
