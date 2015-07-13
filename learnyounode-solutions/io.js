var fs = require('fs');

var fileName = process.argv[2];
var fileContent = fs.readFileSync(fileName).toString();

var cnt = fileContent.split('\n').length-1;
/*
for(var i=0; i<fileContent.length; i++){
    cnt += Number(1);
	//console.log(fileContent[i]+" ");
}
*/
console.log(cnt);


