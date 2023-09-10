const express = require('express');

const app = express();

const config = require('config');

const PORT = config.PORT || 4000;

app.use(express.json());

app.get('/api', (req, res) => {
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
        "slack_name": 'Ibukun Alesinloye',
        "day": currentDay,
        "utc_timestamp": utcTime,
        "track": 'Backend',
        github_file_url: 'https://github.com/highb33kay/HNGx/blob/main/task1-rest-api/app.js', 
        github_repo_url: 'https://github.com/highb33kay/HNGx/tree/main/task1-rest-api', 
        status_code: 200,
    }

    res.json(response);
    console.log(response);

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});