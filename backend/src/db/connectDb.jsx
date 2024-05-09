const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const URI = process.env.Mongo_URI;
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
