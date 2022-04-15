import { MongoClient } from 'mongodb';

const url = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(url);
const database = "mongodb-practice";

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('test');
    let response = await collection.find({}).toArray();
    console.log(response);
}

console.log('rajib')
getData();