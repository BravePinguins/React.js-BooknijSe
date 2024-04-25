import { ApiAbstract } from "../api.helpers";
import { propertyTypesSchema } from "./propertyTypes.types";

export class PropertyTypesApi extends ApiAbstract {
  many() {
    return this.sendRequest("property-types", {
      method: "GET",
      responseSchema: propertyTypesSchema,
    });
  }
}
