"use client";
import { AxiosResponse } from "axios";

import axios from "./axios.ts";
import Auth from "./auth.api.ts";
import Category from "./category.api.ts";

const responseBody = (response: AxiosResponse) => response?.data ?? null;

export const requests = {
  get: (url: string, params?: any) => axios.get(url, params).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody),
  put: (url: string, body: object) => axios.put(url, body).then(responseBody),
  delete: (url: string, params?: any) =>
    axios.delete(url, { params }).then(responseBody),
};

// ----------------------------------------------------------------------

const agent = {
  Auth,
  Category,
};

export default agent;
