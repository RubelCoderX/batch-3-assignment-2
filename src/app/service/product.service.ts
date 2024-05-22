import { Order, Product } from "../interface/product.interface";
import { OrderModel } from "../model/order.model";
import { ProductModel } from "../model/product.model";

//created product
const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};
//get all product
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};
//get single product
const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};
// get update product
const updateProductFromDB = async (
  productId: string,
  updateData: Partial<Product>
) => {
  const result = await ProductModel.findByIdAndUpdate(productId, updateData, {
    new: true,
  });
  return result;
};

//delete a product
const deleteProductFromDB = async (productId: string) => {
  const result = await ProductModel.findByIdAndDelete(productId);
  return result;
};
//search a product
const searchProductFromDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, "i"); //i is a optional i make its case insensitive
  const result = await ProductModel.find({
    name: {
      $regex: regex,
    },
  });
  return result;
};
// Create a New Order
const createOrder = async (orderData: Order) => {
  const result = await OrderModel.create(orderData);
  // console.log(result);
  return result;
};
//Retrieve All Orders
export const getAllOrdersFromDB = async () => {
  const result = await OrderModel.find();
  // console.log(result);
  return result;
};
export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
  searchProductFromDB,
  createOrder,
};
