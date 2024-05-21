import express from "express";
import { ProductControllers } from "../controllers/product.controller";

const router = express.Router();

// route for create product
router.post("/create-product", ProductControllers.createProduct);
//route for retrieve all product
router.get("/", ProductControllers.getAllProducts);

export const ProductRoutes = router;
