var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db){
    if(err)  throw err;
    var users = db.collection('users');
    users.updata({
	  {name: 'Tina'},
      $set: {age: Number(40)}	  
	}, function(err){
	    if(err)  throw err;
		db.close();
	});	
});
