import { Configuration, ConfigurationParameters } from "../core/backend";
import { AuthService } from "./auth.service";
import { environment } from "../../environments/environment";
import { EnvService } from "./env.service";

export const ApiConfigurationServiceFactory = (envService: EnvService/*, authService: AuthService*/) => {
  return new Configuration(
    {
      basePath: envService.apiBasePath,
      // accessToken: authService.getAccessToken.bind(authService),
      // credentials: {
      //     "Authorization": localStorage.getItem(envService.tokenStorageKey) || 'token'
      // },
      // credentials: {
      //   "apiKey": () => localStorage.getItem(envService.tokenStorageKey) || undefined,
      // },
      credentials: {
        "JWT": () => 'Bearer ' + localStorage.getItem(envService.tokenStorageKey) || undefined,
      }
    }
  )
};

export const ApiConfigurationProvider = {
  provide: Configuration,
  useFactory: ApiConfigurationServiceFactory,
  deps: [
    EnvService,
    // AuthService
  ],
  multi: false
};
