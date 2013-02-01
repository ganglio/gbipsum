var gbipsum = exports;

var fs = require("fs"),
    path = require("path")
    colors = require('colors');;

var db = fs.readFileSync(path.join(__dirname,'Ghostbusters.txt'), 'utf8').split("\n");

gbipsum.words = function(number) {
	var out = "";
	while (out.split(" ").length < number)
		out += db[Math.round(Math.random()*db.length)] + " ";
	out = out.split(" ").slice(0,number).join(" ");
	return out;
}

gbipsum.sentences = function(number) {
	var out = [];
	for (var i=0; i<number; i++)
		out.push(db[Math.round(Math.random()*db.length)]);
	return out.join("\n");
}

gbipsum.paragraphs = function(a,b) {
	var out = [];
	for (var i=0; i<a; i++)
		out.push(this.sentences(b));
	return out.join("\n\n");
}