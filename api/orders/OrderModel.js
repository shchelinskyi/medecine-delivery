import mongoose from "mongoose";
import OrderSchema from "./OrderSchema.js";

const OrderModel = mongoose.model("order", OrderSchema);

export default OrderModel;