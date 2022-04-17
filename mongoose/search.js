import express from "express";
import "./config.js";
import { product } from "./product.js";

const app = express();
app.use(express.urlencoded({ extended : true }));
app.use(express.json());


app.get('/search/:key', async(req, res) =>{
    console.log(req.params.key);
    let data = await product.find({
        "$or":[
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}},
            {"category":{$regex:req.params.key}}
        ]
    });
    res.send(data);
});


app.listen(5000);