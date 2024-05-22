"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller"); // This should be OrderControllers
const router = express_1.default.Router();
// Route for creating an order
router.post("/create-order", product_controller_1.ProductControllers.createNewOrder);
// Route for retrieving all orders
router.get("/", product_controller_1.ProductControllers.getAllOrder);
exports.OrderRoutes = router;
