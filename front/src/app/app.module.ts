import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule, Configuration, ConfigurationParameters } from "./core/backend";
import { HttpClientModule } from "@angular/common/http";
// import { AdminModule } from "./admin/admin.module";
// import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppInterceptorProvider } from "./shared/app-interceptor.service.provider";
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApiConfigurationProvider } from "./shared/api-configuration.provider";
import { EnvServiceProvider } from "./shared/env.service.provider";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ApiModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [
    EnvServiceProvider,
    ApiConfigurationProvider,
    AppInterceptorProvider,
    // {provide: Configuration, useClass: ApiConfigurationServiceProvider, multi: false},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
