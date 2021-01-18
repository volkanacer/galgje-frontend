var steden  = [
	"amsterdam",
	"parijs",
	"newyork",
	"rome",
	"kaapstad",
	"istanbul",
	"brugge",
	"vaticaanstad",
	"havana",
	"tokyo",
	"wenen",
	"praag",
	"wellington",
	"melbourne"
]

let antwoord = '';
let maxFouten = 6;
let fouten =  0;
let pogingen = [];
let wordStatus = null;

function eenWord() {
  antwoord = steden[Math.floor(Math.random() * steden.length)];
}

function knoppen() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
        <button
         class="btn btn-lg btn-primary m-2"
         id='` + letter + `
         onClick="handleGuess('` + letter + `')"
         >
         ` + letter + `
         </button>
       `).join('');
   
     document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function gegokteWoord() {
    wordStatus = antwoord.split('').map(letter => (pogingen.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

document.getElementById('maxFouten').innerHTML = maxFouten;

eenWord();
knoppen();
gegokteWoord();