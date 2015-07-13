var mongo = require('Mongodb').MongoClient;
var age = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db){
    if(err)  throw err;
    var par = db.collection('parrots');
    par.find(
	    {age : {$gt: Number(age)}},
	    {name: 1,
		 age: 1,
		 _id: 0}
	).toArray(function(err, docs){
	    if(err)  throw err;
	    console.log(docs);
	    db.close();	
	});
});
