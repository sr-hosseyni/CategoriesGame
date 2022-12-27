import { Component } from '@angular/core';
import { LoadingService } from "./shared/loading.service";
import { AuthService } from "./shared/auth.service";
// import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public loadingService: LoadingService,
    private authService: AuthService,
    // private router: Router,
  ) {
  }

  ngOnInit() {
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  public logout() {
    this.authService.logout();
    // this.router.navigateByUrl('/login');
  }
}
