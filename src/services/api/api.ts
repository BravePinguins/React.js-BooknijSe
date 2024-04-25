import { PropertyTypesApi } from "./propertyTypes/propertyTypes.api";

class ApiService {
  propertyTypes: PropertyTypesApi;

  constructor() {
    this.propertyTypes = new PropertyTypesApi();
  }
}

export const api = new ApiService();
