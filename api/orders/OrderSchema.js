import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    orderDate: String,
    address: String,
    name: String,
    email: String,
    phone: String,
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product',
            },
            price: Number,
            quantity: Number,
            _id: false
        }
    ],
    total: Number
}, { versionKey: false });

export default OrderSchema;


