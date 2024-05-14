require("dotenv").config();
const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;
console.log("URI", URI);
const MongoDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Registered successfully");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = MongoDb;
