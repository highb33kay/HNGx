// Import the Express.js framework
const express = require('express');

// Create an instance of the Express application
const app = express();

// Import configuration settings
const config = require('./config');

// Set the port to use for the server, defaulting to 4000 if not provided in config
const PORT = config.PORT || 4000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define a route for handling GET requests to the '/api' path
app.get('/api', (req, res) => {
    // Extract 'slack_name' and 'track' query parameters from the request
    const { slack_name, track } = req.query;

    // Check if 'slack_name' and 'track' parameters are provided
    if (!slack_name || !track) {
        // If either parameter is missing, return a 400 Bad Request response with an error message
        return res.status(400).json({
            message: "Please provide slack name and track"
        })
    }

    // Get the current date and time
    const currentDate = new Date();

    // Format the current day of the week in long format (e.g., Monday)
    const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

    // Convert the current date and time to a UTC timestamp in ISO format
    const utcTime = currentDate.toISOString();

    // Construct a JSON response object
    const response = {
        "slack_name": slack_name,  
        "day": currentDay,
        "utc_timestamp": utcTime,
        "track": track,  
        github_file_url: 'https://github.com/highb33kay/HNGx/blob/main/task1-rest-api/app.js', 
        github_repo_url: 'https://github.com/highb33kay/HNGx/tree/main/task1-rest-api', 
        status_code: 200,
    }

    // Send the JSON response
    res.json(response);

    // Log the response object to the console
    console.log(response);
});

// Start the Express server, listening on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
