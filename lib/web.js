var express = require('express'),
    colors = require('colors'),
    path = require("path");
    app = express();

var port = require("../config.json").port;

app.set('view engine', 'jade');
app.set('views', path.join(__dirname,'..','resources','views'));

app.get('/', function(req, res){
	res.render('index');
});

app.listen(port);
console.log("App started on port ".yellow+port);