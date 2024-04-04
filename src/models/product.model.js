import { Schema, model } from "mongoose";
import validator from "validator";

const productsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minLength: 2,
      unique: true,
    },
    stock: {
      type: Number,
      required: [true, "Stock is required"],
      min: 0,
    },
    description: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 100,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = model("Product", productsSchema);
