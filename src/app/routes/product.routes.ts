import express from "express";
import { ProductControllers } from "../controllers/product.controller";

const router = express.Router();

// route for create product

router.post("/create-product", ProductControllers.createProduct);

export const ProductRoutes = router;
