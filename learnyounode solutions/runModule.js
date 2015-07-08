var mymodule = require('./module.js')

var path = process.argv[2];
var ext = process.argv[3];

mymodule(path, ext, function(err, files){
	if(err)  console.log("error happens");
	else
	    files.forEach(function(out){
		    console.log(out);	
		});
});
