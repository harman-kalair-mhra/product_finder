import Guid from "guid";
import Order, { IOrder } from "../models/order";

export default class OrderService {
  async createOrder(
    customerId,
    customerOrder,
    customerPl,
    customerDose,
    customerSub
  ) {
    const order = new Order({
      plNumber: customerPl,
      name: customerOrder,
      dose: customerDose,
      substance: customerSub,
      customerId: customerId,
      orderId: Guid.raw(),
    });
    return order.save();
  }
}
