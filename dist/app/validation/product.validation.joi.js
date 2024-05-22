"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
// Joi schema for ProductVariant
const productVariantValidationSchema = joi_1.default.object({
    type: joi_1.default.string().required(),
    value: joi_1.default.string().required(),
});
// Joi schema for Inventory
const inventoryValidationSchema = joi_1.default.object({
    quantity: joi_1.default.number().required().messages({
        "number.base": "Quantity should be a number",
        "any.required": "Quantity is a required field",
    }),
    inStock: joi_1.default.boolean().required().messages({
        "boolean.base": "InStock should be a boolean",
        "any.required": "InStock is a required field",
    }),
});
// Joi schema for Product
const productValidationSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    category: joi_1.default.string().required(),
    tags: joi_1.default.array().items(joi_1.default.string()).required(),
    variants: joi_1.default.array().items(productVariantValidationSchema),
    inventory: inventoryValidationSchema,
});
exports.default = productValidationSchema;
