import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import pharmacyController from "./pharmacies/PharmacyController.js";
import productController from "./products/ProductController.js";
import inventoryController from "./inventories/InventoryController.js";
import orderController from "./orders/OrderController.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/pharmacies", pharmacyController);
app.use("/api/products", productController);
app.use("/api/inventories", inventoryController);
app.use("/api/orders", orderController);


(async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to DB");

        app.listen(process.env.PORT, (err) => {
            if (err) throw err;
            console.log(`Server is running on http://localhost:${process.env.PORT}`);
        });
    } catch (err) {
        throw err;
    }
})();

export default app;






