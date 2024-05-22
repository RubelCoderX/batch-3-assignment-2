import { Product } from "../interface/product.interface";
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
const createOrder = async (orderData: {
  email: string;
  productId: string;
  price: number;
  quantity: number;
}) => {
  //check the product id is valid
  const product = await ProductModel.findById(orderData.productId);
  if (!product) {
    throw new Error("Invalid product id");
  }
  //check insuffciment quantity
  if (product.inventory.quantity < orderData.quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }
  //reduce the product quantity of istock
  product.inventory.quantity -= orderData.quantity;
  // update istock property
  product.inventory.inStock = product.inventory.quantity > 0;
  await product.save();
  //create order
  const order = new OrderModel(orderData);
  const result = await order.save();
  // console.log(result);
  return result;
};

//Retrieve All Orders
const getAllOrdersFromDB = async () => {
  const result = await OrderModel.find();
  // console.log(result);
  return result;
};
//Retrieve Orders by User Email
const getOrderByEmail = async (email: string) => {
  const result = await OrderModel.find({ email });
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
  getAllOrdersFromDB,
  getOrderByEmail,
};
