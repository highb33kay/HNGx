// Import the Express.js framework
const express = require("express");

// Create an instance of the Express application
const app = express();

// require connectdb.js
const connectDB = require("./connectdb");

// Connect to MongoDB and get the mongoose instance
connectDB();

// Import the Person model
const Person = require("./models/person");

// Import configuration settings
const config = require("./config");

// Set the port to use for the server, defaulting to 4000 if not provided in config
const PORT = config.PORT || 4000;

// Validation middleware for the "name" field
function validateName(req, res, next) {
  const { name } = req.body;
  if (typeof name !== "string" || name.length < 3 || name.length > 50) {
    return res.status(400).json({ message: "Invalid named" });
  }
  next(); // Move to the next middleware/route handler
}

// Use express.json() for parsing JSON data
app.use(express.json());

// Define a route for handling Post requests to the '/' path
app.post("/api", validateName, async (req, res) => {
  try {
    const { name } = req.body;
    const person = new Person({
      name,
    });
    const newPerson = await person.save();
    res.status(201).json(newPerson);
  } catch (error) {
    console.error("Error creating a person:", error); // Log the error
    res.status(400).json({ message: "Failed to create a person", error });
  }
});

// Update a person by ID
app.put("/api/:id", validateName, async (req, res) => {
  try {
    const { name } = req.body;
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );
    if (!updatedPerson) throw Error("Person not found");
    res.json(updatedPerson);
  } catch (error) {
    res.status(404).json({ message: "Person not found", error });
  }
});

// Read Person by ID
app.get("/api/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) throw Error("No Person found");
    res.json(person);
  } catch (error) {
    res.status(400).json({ message: "Failed to get a person", error });
  }
});

// Delete a person by ID
app.delete("/api/:id", async (req, res) => {
  try {
    const deletedPerson = await Person.findByIdAndRemove(req.params.id);
    if (!deletedPerson) throw Error("Person not found");
    res.json(deletedPerson);
  } catch (error) {
    res.status(404).json({ message: "Person not found", error });
  }
});

// Start the Express server, listening on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
