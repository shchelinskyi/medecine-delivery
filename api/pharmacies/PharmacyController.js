import express from "express";
import pharmacyService from "./PharmacyService.js";

const router = express.Router();

router.get("/", pharmacyService.getAllPharmacies);

export default router;
