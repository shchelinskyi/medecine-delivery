import mongoose from "mongoose";
import InventorySchema from "./InventorySchema.js";

const InventoryModel = mongoose.model("inventory", InventorySchema);

export default InventoryModel;