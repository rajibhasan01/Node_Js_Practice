import mongoose from "mongoose";

await mongoose.connect("mongodb://0.0.0.0:27017/e-comm");
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number,
        brand: String,
        category: String
    });

const main = async () =>{

    const ProductModel = mongoose.model('products', ProductSchema);
    let data = new ProductModel({name: "IPhone 12 Pro Max", price: "1250000", brand: "Apple", category: "Mobile"});
    let result = await data.save();
    console.log(result);
};

main();
