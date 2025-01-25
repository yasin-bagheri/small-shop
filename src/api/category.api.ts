import { requests } from "./agent.ts";
import { API_ENDPOINTS } from "./api.endpoints.ts";

const Category = {
  list: (params: { per_page: number; page: number }) =>
    requests.get(API_ENDPOINTS.category.root, { params }),
  create: (params: { title: string }) =>
    requests.post(API_ENDPOINTS.category.root, params),
  update: (id: number, params: { title: string }) =>
    requests.put(API_ENDPOINTS.category.root + `/${id}`, params),
  delete: (id: number) =>
    requests.delete(API_ENDPOINTS.category.root + `/${id}`),
};

export default Category;
