var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    var readStream = fs.createReadStream(process.argv[3]);
	readStream.on('open', function(){
	    readStream.pipe(res);	
	})
}).listen(process.argv[2]);
