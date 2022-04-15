import express from 'express';
import { dbConnection } from './mongodb.js';
import { ObjectId } from 'mongodb';

const app = express();
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.get('/', async (req, res)=>{
    let data = await dbConnection();
    let result = await data.find({}).toArray();
    res.send(result);
});

app.post('/', async(req, res) =>{
    let data = await dbConnection();
    let result = await data.insert(req.body);
    res.send(result);
});

app.put('/:name', async (req, res) =>{
    let data = await dbConnection();
    let result = await data.updateOne(
        {name: req.params.name},
        { $set:req.body}
        );
    if(result.modifiedCount){
        res.send({result: "updated"});
    }
    else{
        res.send({msg: "Failed"})
    };
});

app.delete('/:id', async(req, res) =>{
   
    let data = await dbConnection();
    let result = await data.deleteOne({_id:ObjectId(req.params.id)});
    console.log(result);
    if (result.deletedCount){
        res.send({msg:"deleted successfully"});
    }
    else{
        res.send({msg:"Failed"});
    };
})

app.listen(5000);