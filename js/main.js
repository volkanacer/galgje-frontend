var programming_languages  = [
	"python",
	"javascript",
	"mongodb",
	"json",
	"java",
	"html",
	"css",
	"c",
	"csharp",
	"golang",
	"kotlin",
	"php",
	"sql",
	"ruby"
]

let antwoord = '';
let maxFouten = 6;
let fouten =  0;
let pogingen = [];
let wordStatus = null;

function eenWord() {
  antwoord = programming_languages[Math.floor(Math.random() * programming_languages.length)];
}