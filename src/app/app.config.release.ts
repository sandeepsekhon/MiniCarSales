import { IAppConfig } from './i-app-config.interface';
export class AppConfig implements IAppConfig {
  backendUrlBase = 'http://minicarsalesapi20170522094846.azurewebsites.net/';
  apiEndpointUrl =  '/api';
  siteUrl = 'http://ngminicarsales.azurewebsites.net/';
  apiUrl() {
    return `${this.backendUrlBase}${this.apiEndpointUrl}`;
  }
}
