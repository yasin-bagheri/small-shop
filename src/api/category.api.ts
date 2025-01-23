"use client";
import { requests } from "./agent.ts";
import { API_ENDPOINTS } from "./api.endpoints.ts";

const Category = {
  list: () => requests.get(API_ENDPOINTS.category.list),
};

export default Category;
