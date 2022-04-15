import express from 'express';
import { dbConnection } from './mongodb.js';

const app = express();

app.get('/', async (req, res)=>{
    let data = await dbConnection();
    let result = await data.find({}).toArray();
    res.send(result);
});

app.listen(5000);