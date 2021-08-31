/*RED LIGHTS INDICATING WHO'S TURN*/
let turnPointP1 = document.getElementById('turnP1').style.opacity;
let turnPointP2 = document.getElementById('turnP1').style.opacity;

/*TOTAL SCORES*/
let displayScoreP1 = document.getElementById('scoreP1').textContent = 0;
let displayScoreP2 = document.getElementById('scoreP2').textContent = 0;

/*CURRENT SCORES*/
let currentP1 = document.getElementById('currentP1').textContent = 0;
let currentP2 = document.getElementById('currentP2').textContent = 0;



/*DICES SPRITES*/
let dice1 = document.getElementById('dice1').style.display = "none";
let dice2 = document.getElementById('dice2').style.display = "none";
let dice3 = document.getElementById('dice3').style.display = "none";
let dice4 = document.getElementById('dice4').style.display = "none";
let dice5 = document.getElementById('dice5').style.display = "none";
let dice6 = document.getElementById('dice6').style.display = "none";


/*BUTTONS*/
const newgameBtn = document.getElementById('newgameBtn');
const rolldiceBtn = document.getElementById('rolldiceBtn');
const holdBtn = document.getElementById('holdBtn');



const randomNumber = function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

