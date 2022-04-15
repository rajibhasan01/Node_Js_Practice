import { dbConnection } from "./mongodb.js";


const main = async () =>{
    let data = await dbConnection();
    data = await data.find().toArray();
    console.log(data);
}

main();