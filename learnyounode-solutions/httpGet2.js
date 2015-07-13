var http = require('http');
var bl = require('bl');

function callback(res){
    res.pipe(bl(function(err, data){
	    if(err)  console.error("error!");
		else{
		    console.log(data.length);
			console.log(data.toString());
		}
	}));
}

http.get(process.argv[2], callback);

