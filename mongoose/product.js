import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name:String,
    price: Number,
    brand: String,
    category: String
});

export const product = mongoose.model('products', productSchema);