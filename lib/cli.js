var program = require("commander")
    gbipsum = require("./gbipsum");

function list(val) {
	return val.split(",");
}

program
	.version(require("../package.json").version)
	.usage('[options]')
	.option('-w, --words      <n>', 'generate <n> words')
	.option('-s, --sentences  <n>', 'generate <n> sentences')
	.option('-p, --paragraphs <a>,<b>', 'generate <a> paragraphs of <b> sentences', list)
	.parse(process.argv);

if (process.argv.length<=2)
	program.help();

if (program.words) {
	console.error("Generating".yellow+" %d "+"words...".yellow,program.words);
	console.log(gbipsum.words(program.words))
} else if (program.sentences) {
	console.error("Generating".yellow+" %d "+"sentences...".yellow,program.sentences);
	console.log(gbipsum.sentences(program.sentences))
} else if (program.paragraphs) {
	console.error("Generating".yellow+" %d "+"paragraphs of".yellow+" %d "+"sentences...".yellow,program.paragraphs[0],program.paragraphs[1]);
	console.log(gbipsum.paragraphs(program.paragraphs[0],program.paragraphs[1]))
}