import { z } from "zod";

const envSchema = z.object({
  API_URL: z.string(),
});

export const ENV = envSchema.parse({
  API_URL: import.meta.env.VITE_API_URL,
});
