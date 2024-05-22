import { Request, Response } from "express";
import {
  getAllOrdersFromDB,
  ProductServices,
} from "../service/product.service";
import productValidationSchema from "../validation/product.validation.joi";

import { ProductModel } from "../model/product.model";
import { OrderModel } from "../model/order.model";

// create controller for createProduct
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    //creating a schema validation using joi
    const { error } = productValidationSchema.validate(product);

    if (error) {
      res.status(500).json({
        success: false,
        message: "something went wrong",
        error: error.details,
      });
    }
    //call service function to send this data
    const result = await ProductServices.createProductIntoDB(product);
    // send response

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product did not create successfully!",
      error: error,
    });
  }
};
//create controller for getAllProduct and search
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    if (searchTerm) {
      const result = await ProductServices.searchProductFromDB(
        searchTerm as string
      );
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        date: result,
      });
    } else {
      const result = await ProductServices.getAllProductsFromDB();
      res.status(200).json({
        success: true,
        message: "Retrieve a List of All Products successfully!",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product did not retrieve successfully!",
      error: error,
    });
  }
};
// create controller for getSingleProduct
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product did not retrieve by id successfully!",
      error: error,
    });
  }
};
// create controller for update
const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const updateData = req.body;
    const updateProduct = await ProductServices.updateProductFromDB(
      productId,
      updateData
    );
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the product",
      error: error,
    });
  }
};
// create controller for delete product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.deleteProductFromDB(productId);
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
        data: null,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
// create controller for create new order
const createNewOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    // const existingProduct = await OrderModel.findById(productId);
    // if (!existingProduct) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "Product not found",
    //     data: null,
    //   });
    // }
    const result = await ProductServices.createOrder(orderData);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      date: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the order",
      error: error,
    });
  }
};
//create controller for Retrieve All Orders and search by email
const getAllOrder = async (req: Request, res: Response) => {
  // let order;
  try {
    const email = (req.query.email as string) || undefined;

    if (email) {
      const result = await ProductServices.getOrderByEmail(email);
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email!",

        data: result,
      });
    } else {
      const result = await ProductServices.getAllOrdersFromDB();
      res.status(200).json({
        success: true,
        message: "All orders fetched successfully!",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve orders",
      error: true,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createNewOrder,
  getAllOrder,
};
