const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define a person schema
const PersonSchema = new Schema({
  name: String,
});

module.exports = mongoose.model("Person", PersonSchema);
