var mongo = require('mongodb').mongoclient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db){
    if(err)  throw err;
    var cur = db.collection(process.argv[2]);
    cur.remove(
		{_id: process.argv[3]}
	,function(err){
	    if(err)  console.log(err);
		db.close();
	});	
});
