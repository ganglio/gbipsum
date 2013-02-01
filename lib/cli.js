var program = require("commander")
    gbipsum = require("./gbipsum");

program
	.version(require("../package.json").version)
	.option('-w, --words      [number]', 'generate [number] words',      10)
	.option('-s, --sentences  [number]', 'generate [number] sentences',   5)
	.option('-p, --paragraphs [number]', 'generate [number] paragraphs',  3)
	.parse(process.argv);

if (process.argv.length<=2)
	program.help();

if (program.words)
	console.log("Generating %d words...",program.words);
else if (program.sentences)
	console.log("Generating %d sentences...",program.sentences);
else if (program.paragraphs)
	console.log("Generating %d paragraphs...",program.paragraphs);