var express = require('express');
var app = new express();

app.put('/message/:id', function(req, res){
    var id = req.params.id;
    res.write(require('crypto').createHash('sha1').update(new Date().toDateString() + id).digest('hex'));
    res.end();	
});

app.listen(process.argv[2]);
