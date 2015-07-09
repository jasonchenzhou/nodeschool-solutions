var express = require('express');
var fs = require('fs');
var app = new express();

app.get('/books', function(req, res){
    fs.readFile(process.argv[3], function(err, data){
	    res.send(JSON.parse(data.toString()));	
	});		
});

app.listen(process.argv[2]);
