import { model, Schema } from "mongoose";
import { Order } from "../interface/product.interface";

const orderSchema = new Schema<Order>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

// create product model

export const OrderModel = model<Order>("Order", orderSchema);
