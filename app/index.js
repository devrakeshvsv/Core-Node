/**
 * Primary file for the API
 */

// Dependencies
const http = require('http');
const port = 3000;

// The server should respond to all requests with a string
var server = http.createServer(function (req, res) {
	res.end('Hello World!');
});

// Start the server, and have it listen on port 3000
server.listen(port, function () {
	console.log(`Server is running on port ${port}`);
});
