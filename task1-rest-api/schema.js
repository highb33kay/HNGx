// defining the schema for the task
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define a person schema
const personSchema = new Schema({
  name: String,
});

const Person = mongoose.model("Person", personSchema);
