import mongoose from "mongoose";

mongoose.connect("mongodb://0.0.0.0:27017/e-comm");
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = new ProductModel({
    name: "IPhone 12 Pro Max",
    price: "1250000",
    brand: "Apple",
    category: "Mobile",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.updateOne(
    { name: "IPhone 7" },
    {
      $set: { price: 700, name: 'IPhone 7 Pro' },
    }
  );
  console.log(data);
};


const deleteInDB = async () =>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne({name: "IPhone 7 Pro"});
    console.log(data);
}

const findInDB = async () =>{
    const Product = mongoose.model('products', ProductSchema);
    const data = await Product.find({});
    console.log(data);
}

findInDB();