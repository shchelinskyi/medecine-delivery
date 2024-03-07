import PharmacyModel from "./PharmacyModel.js";

const getAllPharmacies = async (req, res) => {
    try {
        const data = await PharmacyModel.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export default {
    getAllPharmacies,
};
