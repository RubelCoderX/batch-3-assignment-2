import { Product } from "../interface/product.interface";
import { ProductModel } from "../model/product.model";

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
};
