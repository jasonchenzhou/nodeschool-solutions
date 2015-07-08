var http = require('http');
var bl = require('bl');

var path = process.argv.slice(2);
var res = [];
var finCnt = 0;

function printAll(){
    for(var i=0; i<path.length; i++)
		console.log(res[i]);
}

function solution(i){
    http.get(path[i], function(respond){
		respond.pipe(bl(function(err, data){
		    if(err)  console.error("error!");
		    res[i] = data.toString();
		    finCnt++;
		    if(finCnt == path.length)  printAll();		
		}));
	});
}

for(var i=0; i<path.length; i++){
	res[i] = "";
    solution(i); 
};
