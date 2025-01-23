import { requests } from "./agent.ts";
import { API_ENDPOINTS } from "./api.endpoints.ts";

const Auth = {
  login: (params: { email: string; password: string }) =>
    requests.post(API_ENDPOINTS.auth.login, params),
  // register: (params: any) => requests.post(API_ENDPOINTS.auth.register, params),
};

export default Auth;
