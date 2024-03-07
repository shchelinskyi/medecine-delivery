import express from "express";
import productService from "./ProductService.js";

const router = express.Router();

router.get("/", productService.getAllProducts);

export default router;