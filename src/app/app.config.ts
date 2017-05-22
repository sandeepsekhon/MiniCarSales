import { IAppConfig } from './i-app-config.interface';
export class AppConfig implements IAppConfig {
  backendUrlBase = 'http://localhost:49020';
  apiEndpointUrl =  '/api';
  siteUrl = 'http://localhost:4200';
  apiUrl() {
    return `${this.backendUrlBase}${this.apiEndpointUrl}`;
  }
}
