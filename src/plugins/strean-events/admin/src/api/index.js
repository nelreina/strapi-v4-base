import { request } from "@strapi/helper-plugin";

export const getAllMapping = async () => {
  return await request("/stream-events/mappings", {
    method: "GET",
  });
};
export const addMapping = async (data) => {
  return await request("/stream-events/mappings", {
    method: "POST",
    body: data,
  });
};
