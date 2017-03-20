var express = require('express');
var app = express();

app.get('/', function(req, res) {
	var msg = 'Hello World via Node.js';
	console.log(msg);
	res.send(msg);
});

app.listen(8888, function() {
	console.log('Example app listening on port 8888');
});