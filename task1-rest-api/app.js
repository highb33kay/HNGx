const express = require('express');

const app = express();

const config = require('./config');

const PORT = config.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
})

app.get('/', (req, res) => {
    const { slack_name, track } = req.query;

    // check if slack name and track are provided
    if (!slack_name || !track) {
        return res.status(400).json({
            message: "Please provide slack name and track"
        })
    }

    // parse the current time and date
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

    const utcTime = currentDate.toISOString();

    // construct the response object
    const response = {
        "slack_name": slack_name,
        "track": track,
        "day": currentDay,
        "utc_timestamp": utcTime,
        github_file_url: 'https://github.com/highb33kay/repo/blob/main/file_name.ext', 
        github_repo_url: 'https://github.com/highb33kay/', 
        status_code: 200,
    }

    res.json(response);

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});