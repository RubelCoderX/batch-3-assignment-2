import express from "express";
import { ProductControllers } from "../controllers/product.controller"; // This should be OrderControllers
const router = express.Router();

// Route for creating an order
router.post("/create-order", ProductControllers.createNewOrder);
// Route for retrieving all orders
router.get("/", ProductControllers.getAllOrder);

export const OrderRoutes = router;
