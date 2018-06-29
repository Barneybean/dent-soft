const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dent_soft"
);

const usersSeed = 
  [{
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    birth_date: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    provider: "",
    provider_id: "",
    provider_pic: "",
    token: "",
    record: "",
    note: "",
    reservations: ""
  }]
  

db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
