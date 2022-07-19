import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule, Configuration, ConfigurationParameters } from "./core/api";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { environment } from "../environments/environment";
import { AdminModule } from "./admin/admin.module";
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppInterceptor } from "./shared/app-interceptor.service";

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: environment.basePath,
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    HttpClientModule,
    ApiModule.forRoot(apiConfigFactory),
    AdminModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
