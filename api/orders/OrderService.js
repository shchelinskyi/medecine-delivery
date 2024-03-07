import mongoose from "mongoose";
import OrderModel from "./OrderModel.js";


const createOrder = async (req, res) => {
    try {
        const { orderDate, address, name, email, phone, products, total } = req.body;

        const order = new OrderModel({
            _id: new mongoose.Types.ObjectId(),
            orderDate,
            address,
            name,
            email,
            phone,
            products,
            total,
        });

        await order.save();

        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const data = await OrderModel.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export default {
    getAllOrders,
    createOrder,
};
