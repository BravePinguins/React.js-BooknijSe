import axios from "axios";
import { ENV } from "src/config";

import { RequestConfig } from "./api.types";

export abstract class ApiAbstract {
  protected async sendRequest<T>(path: string, config: RequestConfig<T>) {
    try {
      const response = await axios({
        url: `${ENV.API_URL}/${path}`,
        ...config,
        headers: {
          // @TODO: add authorization header in the request, create access token class service
          ...config.headers,
        },
      });
      console.log({ response });
      return await config.responseSchema.parseAsync(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}
