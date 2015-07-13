var fs = require('fs')

var path = process.argv[2];
fs.readFile(path, 'utf8', function(err, data){
		if(err)  console.log("error happens");
		else{
		    var cnt = data.split('\n').length-1;    
			console.log(cnt);
		}
});

