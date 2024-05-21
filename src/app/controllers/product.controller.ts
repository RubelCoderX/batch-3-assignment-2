import { Request, Response } from "express";
import { ProductServices } from "../service/product.service";

// create controller for createProduct
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
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

export const ProductControllers = {
  createProduct,
};
