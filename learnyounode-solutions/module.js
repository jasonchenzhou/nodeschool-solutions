var fs = require('fs');
var path = require('path');

module.exports = function(loc, ext, callback){
	var extension = "." + ext;
	res = [];
    fs.readdir(loc, function(err, list){
		if(err)  callback(err, null);
		else{
		    list.forEach(function(file){
			    if(path.extname(file) == extension)  res.push(file);
			});
		    callback(null, res);
		}
	});
}

