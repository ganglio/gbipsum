var express = require('express'),
    colors = require('colors')
    app = express();

var port = require("../config.json").port;

app.set('views', __dirname + '../resources/views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
	res.rended('index');
});

app.listen(port);
console.log("App started on port ".yellow+port);