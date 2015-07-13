var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db){
    if(err)  throw err;
    var cur = db.collection('prices');
    cur.aggregate([
	    {$match: {size: process.argv[2]}},
	    {$group: {_id: 'avg',
                  avg: {$avg: '$price'}}}	
	]).toArray(function(err, res){
		    if(!res.length)  throw new Error('No results found');
			var o = res[0];
		    console.log(Number(o.avg).toFixed(2));
			db.close();
	    });	
});
