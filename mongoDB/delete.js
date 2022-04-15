import { dbConnection } from "./mongodb.js";

const deleteData = async() =>{
    let db = await dbConnection();
    let result = await db.deleteOne({name: 'Eity'});

    if (result.acknowledged){
        console.log('Deleted successfully');
    }
};

deleteData();
 