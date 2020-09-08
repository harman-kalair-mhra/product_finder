import mongoose from "mongoose";

import Item from "./item";

const connectDb = () => {
  return mongoose.connect("mongodb://localhost:27017/products");
};

const models = { Item };

export { connectDb };

export default models;
