import express from "express";
import { ProductControllers } from "../controllers/product.controller";

const router = express.Router();

// route for create product
router.post("/products", ProductControllers.createProduct);
//route for retrieve all product and search query
router.get("/products", ProductControllers.getAllProducts);
//route for getSingleProduct
router.get("/products/:productId", ProductControllers.getSingleProduct);
//route for update product
router.put("/products/:productId", ProductControllers.updateProduct);
//route for delete product
router.delete("/products/:productId", ProductControllers.deleteProduct);

export const ProductRoutes = router;
