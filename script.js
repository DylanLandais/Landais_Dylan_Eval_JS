//RED TURN DOTS
const turnDotP1 = document.getElementById('turnP1');

const turnDotP2 = document.getElementById('turnP2');

//SCORES
var scoreP1 = document.getElementById('scoreP1')
var scoreP2 = document.getElementById('scoreP2')
var currentP1 = document.getElementById('currentP1')
var currentP2 = document.getElementById('currentP2')
//PLAYERS
var inRoundPlayer = 1;
var ts1 = 0;
var ts2 = 0;
var cp1 = 0;
var cp2 = 0;


/*DICES SPRITES*/
var dice1 = document.getElementById('dice1');
dice1.style.opacity = 0;
var dice2 = document.getElementById('dice2');
dice2.style.opacity = 0;
var dice3 = document.getElementById('dice3');
dice3.style.opacity = 0;
var dice4 = document.getElementById('dice4');
dice4.style.opacity = 0;
var dice5 = document.getElementById('dice5');
dice5.style.opacity = 0;
var dice6 = document.getElementById('dice6');
dice6.style.opacity = 0;


/*BUTTONS*/
const newgameBtn = document.getElementById('newgameBtn');
const rolldiceBtn = document.getElementById('rolldiceBtn');
rolldiceBtn.style.display = "none";
const holdBtn = document.getElementById('holdBtn');
holdBtn.style.display = "none";

//RANDOM NUMBER FUNCTION
var randomNumber = function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

//ROUNDS FUNCTION

var p1InRound = function(){
    inRoundPlayer = 0;
    turnDotP1.style.opacity = 1;
    turnDotP2.style.opacity = 0;
    console.log(inRoundPlayer)
}

var p2InRound = function(){
    inRoundPlayer = 1;
    turnDotP1.style.opacity = 0;
    turnDotP2.style.opacity = 1;
    console.log(inRoundPlayer)
}

/*START A NEW GAME*/

var newGameFunc = function(){
    console.log('Nouvelle partie')
    allDicesDis();
    holdBtn.style.display = "";
    rolldiceBtn.style.display = "";
    scoreP1.textContent = 0;
    scoreP2.textContent = 0;
    currentP1.textContent = 0;
    currentP2.textContent = 0;
    cp1 = 0;
    ts1 = 0;
    cp2 = 0;
    ts2 = 0;

    inRoundPlayer = randomNumber(2);
    console.log('inRoundPlayer = ' + inRoundPlayer)
    
    inRoundPlayer == 0 ? p1InRound() : p2InRound()
    
}

//ROLL DICE
var allDicesDis = function(){
    dice1.style.opacity = 0;
    dice2.style.opacity = 0;
    dice3.style.opacity = 0;
    dice4.style.opacity = 0;
    dice5.style.opacity = 0;
    dice6.style.opacity = 0;
};

var givePoints = function(points){
    if(inRoundPlayer == 0){
        console.log('cp1' + inRoundPlayer)
        cp1 = cp1 += points;
        currentP1.textContent = cp1
    }else{
        console.log('cp2')
        cp2 = cp2 += points;
        currentP2.textContent = cp2
    };
}

var rolldiceFunc = function(){
    allDicesDis();
    let dice = randomNumber(6);
    console.log('Dice = ' + dice)
    switch(dice){
        case 0 :
            dice1.style.opacity = 1
            changeRound();
            break;
        case 1 :
            dice2.style.opacity = 1;
            givePoints(2)
            break;
        case 2 :
            dice3.style.opacity = 1;
            givePoints(3)
            break;
        case 3 :
            dice4.style.opacity = 1;
            givePoints(4)
            break;
        case 4 :
            dice5.style.opacity = 1;
            givePoints(5)
            break;
        case 5 :
            dice6.style.opacity = 1;
            givePoints(6)
            break;
    }
}

//HOLD

var changeRound = function(){
    if(inRoundPlayer == 0){
        cp1 = 0;
        currentP1.textContent = cp1;
        p2InRound();
    }else{
        cp2 = 0;
        currentP2.textContent = cp2;
        p1InRound();
    }
}

var holdFunc = function(){
    if(inRoundPlayer == 0){
        
        ts1 = ts1 += cp1;
        scoreP1.textContent = ts1
        cp1 = 0
        currentP1.textContent = cp1
        if(ts1 >= 100){
            console.log('Player 1 win!')
            cp1 = 0;
            ts1 = 0;
            cp2 = 0;
            ts2 = 0;
            allDicesDis();
            rolldiceBtn.style.display = "none";
            holdBtn.style.display = "none";
            scoreP1.textContent = "WINNER"
            scoreP2.textContent = "LOSER"
        }else{
            changeRound();}
    }else{
        ts2 = ts2 += cp2;
        scoreP2.textContent = ts2
        cp2 = 0
        currentP2.textContent = cp2
        if(ts2 >= 100){
            console.log('Player 2 win!')
            cp1 = 0;
            ts1 = 0;
            cp2 = 0;
            ts2 = 0;
            allDicesDis();
            rolldiceBtn.style.display = "none";
            holdBtn.style.display = "none";
            scoreP2.textContent = "WINNER";
            scoreP1.textContent = "LOSER";
        }else{
            changeRound();}
    };

}





newgameBtn.addEventListener('click', newGameFunc);
rolldiceBtn.addEventListener('click', rolldiceFunc)
holdBtn.addEventListener('click', holdFunc)