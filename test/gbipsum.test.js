var	vows = require("vows"),
    assert = require("assert"),
    gbipsum = require("../lib/gbipsum");

vows.describe("gbipsum").addBatch({
	'Testing': {
		topic: function(){ return gbipsum },
		'words': function(topic) {
			var out = topic.words(5);
			assert.equal(out.split(" ").length,5);
		},
		'sentences': function(topic) {
			var out = topic.sentences(5);
			assert.equal(out.split("\n").length,5);
		},
		'paragraphs': function (topic) {
			var out = topic.paragraphs(5,3);
			assert.equal(out.split("\n\n").length,5);
		}
	}
}).export(module);