/**
 * Primary file for the API
 */

// Dependencies
const http = require('http');
const { parse } = require('path');
const url = require('url');
const port = 3000;

// The server should respond to all requests with a string
var server = http.createServer(function (req, res) {
	// Get the URL and parse it
	var parsedUrl = url.parse(req.url, true);

	// Get the path
	var path = parsedUrl.pathname;
	var trimmedPath = path.replace(/^\/+|\/+$/g, '');

	// Get the HTTP method
	var method = req.method.toLowerCase();

	// Get the query string as an object
	var queryStringObject = parsedUrl.query;

	// Send the response
	res.end('Hello World!\n');

	// Log the request path
	console.log(`Request received on path : ${trimmedPath} with method ${method} and with these query string parameters `, queryStringObject);
});

// Start the server, and have it listen on port 3000
server.listen(port, function () {
	console.log(`Server is running on port ${port}`);
});
