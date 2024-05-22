"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const order_model_1 = require("../model/order.model");
const product_model_1 = require("../model/product.model");
//created product
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.create(product);
    return result;
});
//get all product
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.find();
    return result;
});
//get single product
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findById(id);
    return result;
});
// get update product
const updateProductFromDB = (productId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findByIdAndUpdate(productId, updateData, {
        new: true,
    });
    return result;
});
//delete a product
const deleteProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findByIdAndDelete(productId);
    return result;
});
//search a product
const searchProductFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const regex = new RegExp(searchTerm, "i"); //i is a optional i make its case insensitive
    const result = yield product_model_1.ProductModel.find({
        name: {
            $regex: regex,
        },
    });
    return result;
});
// Create a New Order
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    //check the product id is valid
    const product = yield product_model_1.ProductModel.findById(orderData.productId);
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
    yield product.save();
    //create order
    const order = new order_model_1.OrderModel(orderData);
    const result = yield order.save();
    // console.log(result);
    return result;
});
//Retrieve All Orders
const getAllOrdersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.find();
    // console.log(result);
    return result;
});
//Retrieve Orders by User Email
const getOrderByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.find({ email });
    return result;
});
exports.ProductServices = {
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
