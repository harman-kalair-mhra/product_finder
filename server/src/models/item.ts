import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: false,
      required: true,
    },
  },
  { timestamps: true }
);

const Item = mongoose.model("Items", itemSchema);

export default Item;
