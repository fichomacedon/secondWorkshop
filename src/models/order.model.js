import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
    min: 3,
  },
  products: {
    type: String,
    required: true,
    minLength: 3,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      //   ref needs to point to the model name we used when creating student model
      ref: "Product",
    },
  ],
});

export const Order = model("Order", orderSchema);
