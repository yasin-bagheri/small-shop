import { requests } from "./agent.ts";
import { API_ENDPOINTS } from "./api.endpoints.ts";

const Category = {
  list: () => requests.get(API_ENDPOINTS.category.list),
  create: (params: { title: string }) =>
    requests.post(API_ENDPOINTS.category.list, params),
};

export default Category;
