import { dbConnection } from "./mongodb.js";

const updateData = async () =>{
    let data = await dbConnection();
    let result =await data.updateMany(
        {name: 'Rabeya'},
        {$set:{name:'Eity'}}
    )

   if(result.modifiedCount){
       console.log('updated succefully');
   }
}
updateData();