import express from "express";
import './config.js';
import { product } from "./product.js";
const app = express();
app.use(express.urlencoded({ extended : true }));
app.use(express.json());


app.post('/create', async (req, res) =>{
    let data = new product(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
});

app.get("/list", async(req, res) =>{
    let data = await product.find();
    res.send(data);
});

app.delete("/delete/:_id", async(req, res) =>{
    const id = req.params;
    let data = await product.deleteOne(id);
    res.send(data);
});

app.put("/update/:_id", async(req, res) =>{
    const id = req.params;
    let data = await product.updateOne(
        id,
        {
            $set: req.body
        }
    );
    res.send(data);
});


app.listen(5000);