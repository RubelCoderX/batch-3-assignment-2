"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const router = express_1.default.Router();
// route for create product
router.post("/create-product", product_controller_1.ProductControllers.createProduct);
//route for retrieve all product and search query
router.get("/", product_controller_1.ProductControllers.getAllProducts);
//route for getSingleProduct
router.get("/:productId", product_controller_1.ProductControllers.getSingleProduct);
//route for update product
router.put("/:productId", product_controller_1.ProductControllers.updateProduct);
//route for delete product
router.delete("/:productId", product_controller_1.ProductControllers.deleteProduct);
exports.ProductRoutes = router;
