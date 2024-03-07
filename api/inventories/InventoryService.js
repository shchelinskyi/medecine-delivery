import InventoryModel from "./InventoryModel.js";

const getAllInventories = async (req, res) => {
    try {
        const data = await InventoryModel.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getProductsByPharmacy = async (req, res) => {
    try {
        const products = await InventoryModel.find({ pharmacy: req.params.pharmacyId }).populate('product');
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductsSortedUp = async (req, res) => {
    try {
        const products = await InventoryModel.find({ pharmacy: req.params.pharmacyId })
            .populate('product')
            .sort({ price: 1 });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductsSortedDown = async (req, res) => {
    try {
        const products = await InventoryModel.find({ pharmacy: req.params.pharmacyId })
            .populate('product')
            .sort({ price: -1 });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    getAllInventories,
    getProductsByPharmacy,
    getProductsSortedUp,
    getProductsSortedDown,
};
