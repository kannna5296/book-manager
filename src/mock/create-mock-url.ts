import { OpenAPI } from "../repositories/generated";

export const createMockEndpoint = (path: string) => {
  const base = OpenAPI.BASE;
  return base + path;
};
