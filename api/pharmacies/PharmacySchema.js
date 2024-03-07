import mongoose from "mongoose";

const PharmacySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String
});

export default PharmacySchema;


// const PharmacySchema = new mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     name: String,
//     medicals: [{
//         _id: mongoose.Schema.Types.ObjectId,
//         name: String,
//         imgSrc: String,
//         price: Number,
//         quantity: Number
//     }]
// });
//
// export default PharmacySchema;