import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Credentials, Token, TokenService } from "../../../core/backend";
import { Router } from "@angular/router";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { AuthService } from "../../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  credentials: Credentials = {} as Credentials;

  constructor(
    public authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(this.credentials.email, [Validators.required, Validators.email]),
      password: new FormControl(this.credentials.password, [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.authService.login(this.form.value)
      .add(
        () => {
          console.log('User is logged in!');
          this.router.navigateByUrl('/admin/games');
        }
      )
  }

}
