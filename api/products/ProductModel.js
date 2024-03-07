import mongoose from "mongoose";
import ProductSchema from "./ProductSchema.js";

const ProductModel = mongoose.model("product", ProductSchema);

export default ProductModel;