import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  public production: boolean = environment.production;
  public basePath: string = environment.basePath;
  public apiBasePath: string = environment.apiBasePath;
  public enableDebug = false;
  public tokenStorageKey: string = 'token';

  constructor() {
  }

}
