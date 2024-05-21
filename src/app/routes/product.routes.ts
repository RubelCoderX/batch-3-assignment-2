import express from "express";
import { ProductControllers } from "../controllers/product.controller";

const router = express.Router();

// route for create product
router.post("/create-product", ProductControllers.createProduct);
//route for retrieve all product
router.get("/", ProductControllers.getAllProducts);
//route for getSingleProduct
router.get("/:productId", ProductControllers.getSingleProduct);
//route for update product
router.put("/:productId", ProductControllers.updateProduct);

export const ProductRoutes = router;
