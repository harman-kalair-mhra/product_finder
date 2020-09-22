//Mongoose

import mongoose, { Document } from "mongoose";

export interface IOrder extends Document {
  plNumber: String;
  name: string;
  dose: String;
  substance: String;
  customerId: string;
  orderId: String;
}

const orderSchema = new mongoose.Schema(
  {
    plNumber: {
      type: String,
      unique: false,
      required: true,
    },
    name: {
      type: String,
      unique: false,
      required: true,
    },
    dose: {
      type: String,
      unique: false,
      required: true,
    },
    substance: {
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
