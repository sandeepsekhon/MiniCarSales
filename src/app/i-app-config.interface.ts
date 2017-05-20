export interface IAppConfig {
  backendUrlBase: string; // url base for backend connections; ie, "http://localhost:2470"
  apiEndpointUrl: string; // api path segment root; ie, "/api"
  siteUrl: string; // the  url on which this app runs.
  apiUrl(): string;
}
