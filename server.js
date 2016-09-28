
// Required packages for app to work
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Set up for the Express app
var app = express();
var PORT = 3000;

// Sets up the body-parser package
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// Get request that sends user to the first Ajax Page
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'view.html'));
});


// Starts the server to begin listening
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
