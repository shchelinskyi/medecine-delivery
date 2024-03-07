import mongoose from "mongoose";

const InventorySchema = new mongoose.Schema({
    pharmacy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pharmacy'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    price: Number,
    quantity: Number
});

export default InventorySchema;