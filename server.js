// Empty JS object to act as endpoint for all routes
projectData = {};

// dotenv to use custom environment variables
require('dotenv').config();

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const key = process.env.API_KEY

// Spin up the server
const port = process.env.PORT || 3000;
const server = app.listen(port, listening);

function listening() {
    console.log(`Running on localhost: ${port}`);
};

// GET route for projectData
app.get('/all', getData);

function getData (req, res) {
    res.send(projectData);
};

// GET route for API Key
app.get('/key', getKey);

function getKey(req, res) {
    res.send(key);
}

// POST route
app.post('/add', postData);

function postData (req, res) {
    projectData = req.body;
    projectData['date'] = req.body.date;
    projectData['city'] = req.body.city;
    projectData['icon'] = req.body.icon;
    projectData['temp'] = req.body.temp;
    projectData['description'] = req.body.description;
    projectData['feelings'] = req.body.feelings;
    projectData['hour'] = req.body.hour;
    res.send(projectData);
};


