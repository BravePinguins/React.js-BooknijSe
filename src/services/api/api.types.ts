import { z } from "zod";

export type Methods = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";

export type RequestConfig<T> = {
  method: Methods;
  responseSchema: z.ZodSchema<T>;
  headers?: Record<string, string | null>;
  params?: Record<string, unknown>;
  data?: unknown;
};
