import { requests } from "./agent.ts";
import { API_ENDPOINTS } from "./api.endpoints.ts";

const Order = {
  chart: () => requests.get(API_ENDPOINTS.order.chart),
};

export default Order;
