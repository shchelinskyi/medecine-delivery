import mongoose from "mongoose";
import PharmacySchema from "./PharmacySchema.js";

const PharmacyModel = mongoose.model("pharmacy", PharmacySchema);

export default PharmacyModel;