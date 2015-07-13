var mongo = require('mongodb'),mongoclient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db){
    if(err)  throw err;
    var cur = db.collection('parrots');
    cur.count(
		{age: {$gt: Number(process.argv[2])}},
		function(err, cnt){
		    if(err)  throw err;
		    console.log(cnt);
			db.close();
		}
	);	
});
