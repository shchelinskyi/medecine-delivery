import ProductModel from "./ProductModel.js";

const getAllProducts = async (req, res) => {
    try {
        const data = await ProductModel.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export default {
    getAllProducts,
};
