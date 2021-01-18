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
         id='` + letter + `'
         onClick="handleGuess('` + letter + `')"
         >
         ` + letter + `
         </button>
       `).join('');
   
     document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(gekozenLetter) {
    pogingen.indexOf(gekozenLetter) === -1 ? pogingen.push(gekozenLetter) : null;
    document.getElementById(gekozenLetter).setAttribute('disabled', true);

    if (antwoord.indexOf(gekozenLetter) >= 0) {
        gegokteWoord();
        checkIfGameWon();
    } else if (antwoord.indexOf(gekozenLetter) === -1) {
        fouten++;
        updateFouten();
        checkIfGameLost();
        updateGalgjeFoto();
    }
}

function updateGalgjeFoto() {
    document.getElementById("galgje").src = "./img/" + fouten + ".jpg";
}

function checkIfGameWon() {
    if (wordStatus === antwoord) {
        document.getElementById('keyboard').innerHTML = 'U heeft gewonnen!';
    }
}

function checkIfGameLost() {
    if (fouten === maxFouten) {
        document.getElementById('wordSpotlight').innerHTML = 'De antwoord was: '  + antwoord;
        document.getElementById('keyboard').innerHTML = 'U heeft verloren!';
    }
}

function gegokteWoord() {
    wordStatus = antwoord.split('').map(letter => (pogingen.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateFouten() {
    document.getElementById('fouten').innerHTML = fouten;
}

function reset() {
    fouten = 0;
    pogingen = [];
    document.getElementById("galgje").src ="./img/0.jpg";

    eenWord();
    gegokteWoord();
    updateFouten();
    knoppen();
}

document.getElementById('maxFouten').innerHTML = maxFouten;

eenWord();
knoppen();
gegokteWoord();