var http = require('http');
var url = require('url');

var route = {
    "/api/parsetime" : function(d){
		return{
		    "hour":  d.getHours(),
            "minute":  d.getMinutes(),
			"second":  d.getSeconds(),
		};
	},

	"/api/unixtime": function(d){
		return{ 
			"unixtime":  d.getTime()
		};
	}
}

http.createServer(function(req, res){
	var path = url.parse(req.url, true);
    var solution = route[path.pathname];
	var date = new Date(path.query.iso);
	if(solution){
	    res.writeHead(200, {'Content-Type': 'application/json'});
		res.write(JSON.stringify(solution(date)));
		res.end();
	}
	else{
	    res.writeHead(404);
		res.end();
	}
}).listen(process.argv[2]);
