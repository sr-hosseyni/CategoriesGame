import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Credentials } from "../../../core/backend";
import { Router } from "@angular/router";
import { AuthService } from "../../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  credentials: Credentials = {} as Credentials;
  redirectUrl: string = '/admin/games';

  constructor(
    public authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl(this.redirectUrl);
    }

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
      .subscribe((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          this.router.navigateByUrl(this.redirectUrl);
        } else {
          // @todo show error message because something is wrong, User is not logged in, reasonably we should never end up here!!
        }
      });
  }

}
