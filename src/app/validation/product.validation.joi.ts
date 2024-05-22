import Joi from "joi";
// Joi schema for ProductVariant
const productVariantValidationSchema = Joi.object({
  type: Joi.string().required(),
  value: Joi.string().required(),
});

// Joi schema for Inventory
const inventoryValidationSchema = Joi.object({
  quantity: Joi.number().required().messages({
    "number.base": "Quantity should be a number",
    "any.required": "Quantity is a required field",
  }),
  inStock: Joi.boolean().required().messages({
    "boolean.base": "InStock should be a boolean",
    "any.required": "InStock is a required field",
  }),
});

// Joi schema for Product
const productValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
  variants: Joi.array().items(productVariantValidationSchema),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
