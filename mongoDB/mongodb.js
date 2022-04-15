import { MongoClient } from "mongodb";

const url = "mongodb://0.0.0.0:27017/";
const client = new MongoClient(url);
const database = "mongodb-practice";

export async function dbConnection() {
  try {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection("test");
    return collection;
  } catch (err) {
    console.log(err);
  } finally {
  }
}
