//Mongoose

import mongoose, { Document } from "mongoose";

export interface IProduct extends Document {
  plNumber: string;
  name: string;
  dose: string;
  substance: string;
  url: string;
}

const productSchema = new mongoose.Schema(
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
    url: {
      type: String,
      unique: false,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model<IProduct>("productItems", productSchema);

export default Product;
