var http = require('http');

var url = process.argv[2];

function callback(res){
    res.on('data', function(chunk){
		console.log(chunk.toString());
	});
	res.on('error', function(){
		console.error("error happens!");
	});
}

http.get(url, callback);
