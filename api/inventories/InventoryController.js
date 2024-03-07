import express from "express";
import inventoryService from "./InventoryService.js";

const router = express.Router();

router.get("/", inventoryService.getAllInventories);
router.get("/:pharmacyId/products", inventoryService.getProductsByPharmacy);
router.get("/:pharmacyId/products/sortedUp", inventoryService.getProductsSortedUp);
router.get("/:pharmacyId/products/sortedDown", inventoryService.getProductsSortedDown);

export default router;
