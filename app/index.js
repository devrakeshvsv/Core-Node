/**
 * Primary file for the API
 */

// Dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const port = 3000;

// The server should respond to all requests with a string
var server = http.createServer(function (req, res) {
	// Get the URL and parse it
	var parsedUrl = url.parse(req.url, true);

	// Get the path
	var path = parsedUrl.pathname;
	var trimmedPath = path.replace(/^\/+|\/+$/g, '');

	// Get the query string as an object
	var queryStringObject = parsedUrl.query;

	// Get the HTTP method
	var method = req.method.toLowerCase();

	// Get the headers as an object
	var headers = req.headers;

	// Get the payload, if any
	var decoder = new StringDecoder('utf-8');
	var buffer = '';

	req.on('data', function (data) {
		buffer += decoder.write(data);
	});

	req.on('end', function () {
		buffer += decoder.end();

		// Send the response
		res.end('Hello World!\n');

		// Log the request payload
		console.log(`Request received with these payload `, buffer);
	});
});

// Start the server, and have it listen on port 3000
server.listen(port, function () {
	console.log(`Server is running on port ${port}`);
});
