import { model, Schema } from "mongoose";
import {
  Inventory,
  Product,
  ProductVariant,
} from "../interface/product.interface";

//create productVariantSchema
const productVariantSchema = new Schema<ProductVariant>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

// create inventorySchema
const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

// create produceSchem
const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: [productVariantSchema],
  inventory: inventorySchema,
});

// create model

export const ProductModel = model<Product>("Product", productSchema);
