import mongoose from "mongoose";

import Product from "./product";

const connectDb = () => {
  return mongoose.connect("mongodb://localhost:27017/products");
};

const models = { Product };

export { connectDb };

export default models;
