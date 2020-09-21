import mongoose from "mongoose";

import Product from "./product";
import Order from "./order";

const connectDb = () => {
  return mongoose.connect("mongodb://localhost:27017/products");
};

const models = { Product, Order };

export { connectDb };

export default models;
