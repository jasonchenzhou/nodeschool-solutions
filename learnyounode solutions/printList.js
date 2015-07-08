var fs = require('fs');

var path = process.argv[2];
var extension = process.argv[3];

fs.readdir(path, function(err, list){
	if(err)  console.log("error happens");
	else{
        for(var i=0; i<list.length; i++){
	        var cmp = list[i].split('.')[1];
		    if(extension == cmp)  console.log(list[i]);
	    }	
	}	
});
