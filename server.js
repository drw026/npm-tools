var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 1984;
var baseDir = 'dist';

// define use for static files
app.use('/', express.static(path.join(__dirname, baseDir)));

// set index.html
app.get('/', function(req, res) {

    res.sendFile('index.html');

});

// start server
app.listen(port, function() {

    console.log('Listening on ' + port);

});