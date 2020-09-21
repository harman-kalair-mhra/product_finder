import Guid from "guid";
import Order, { IOrder } from "../models/order";

export default class OrderService {
  async createOrder(customerId, customerOrder) {
    const order = new Order({
      name: customerOrder,
      customerId: customerId,
      orderId: Guid.raw(),
    });
    return order.save();
  }
}
