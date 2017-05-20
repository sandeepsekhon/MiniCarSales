import { IAppConfig } from './i-app-config.interface';
export class AppConfig implements IAppConfig {
  backendUrlBase:string = 'http://localhost:49020';
  apiEndpointUrl:string =  '/api';
  siteUrl: string = "http://localhost:4200";
  apiUrl():string {
    return `${this.backendUrlBase}${this.apiEndpointUrl}`;
  }
}
