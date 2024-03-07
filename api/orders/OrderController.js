import express from "express";
import orderService from "./OrderService.js";

const router = express.Router();

router.post("/", orderService.createOrder);
router.get("/", orderService.getAllOrders);

export default router;