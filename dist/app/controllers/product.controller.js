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
exports.ProductControllers = void 0;
const product_service_1 = require("../service/product.service");
// create controller for createProduct
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        //call service function to send this data
        const result = yield product_service_1.ProductServices.createProductIntoDB(product);
        // send response
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Product did not create successfully!",
            error: error,
        });
    }
});
//create controller for getAllProduct
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: "Retrieve a List of All Products successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Product did not retrieve successfully!",
            error: error,
        });
    }
});
// create controller for getSingleProduct
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Product did not retrieve by id successfully!",
            error: error,
        });
    }
});
// create controller for update
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const updateData = req.body;
        const updateProduct = yield product_service_1.ProductServices.updateProductFromDB(productId, updateData);
        if (!updateProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while updating the product",
            error: error,
        });
    }
});
// create controller for delete product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_service_1.ProductServices.deleteProductFromDB(productId);
        if (!result) {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully!",
                data: null,
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.ProductControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
