import { dbConnection } from "./mongodb.js";

const insert = async () => {
  const db = await dbConnection();
  const result = await db.insert([
    {
      name: "Rabeya",
      age: "24 yrs",
      DOB: 1998,
    },
    {
      name: "Rabeya",
      age: "24 yrs",
      DOB: 1998,
    },
    {
      name: "Rabeya",
      age: "24 yrs",
      DOB: 1998,
    },
  ]);

  if (result.acknowledged) {
    console.log("Data inserted");
  }
};

insert();
