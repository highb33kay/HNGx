const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://highb33kay:roxtDLTg3DJ7hHLG@cluster0.fjeztut.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connect to MongoDB successfully");
  } catch (error) {
    console.log("Connect failed " + error.message);
  }
};

module.exports = connectDB;
