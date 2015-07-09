var express = require('express');
var bodyParser = require('body-parser');
var app = new express();

app.use(bodyParser.urlencoded({extended: false}));
app.post('/form', function(req, res){
    var strValue = req.body.str.split('').reverse().join('');
    res.write(strValue);
    res.end();	
});

app.listen(process.argv[2]);
