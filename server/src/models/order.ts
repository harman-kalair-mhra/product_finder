//Mongoose

import mongoose, { Document } from "mongoose";

export interface IOrder extends Document {
  name: string;
  customerId: string;
  orderId: String;
}

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: false,
      required: true,
    },
    customerId: {
      type: String,
      unique: false,
      required: true,
    },
    orderId: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model<IOrder>("Order", orderSchema);

export default Order;
