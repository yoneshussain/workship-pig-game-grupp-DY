// =============================================
// Grisspelet
// =============================================


// ---------- 1. Speldata ----------

const WINNING_SCORE = 100; // Poäng som krävs för att vinna

let scores = [0, 0];       // Totalpoäng: scores[0] = Spelare 1, scores[1] = Spelare 2
let roundScore = 0;        // Omgångspoäng för den aktiva spelaren
let activePlayer = 0;      // 0 = Spelare 1, 1 = Spelare 2
let isPlaying = true;      // Blir false när någon har vunnit


// ---------- 2. Element i DOM:en ----------


//SPEL-2 Ticket-slå-tärning Ansvarig: Daniel Ringel
const dice1El = document.querySelector('#dice-1');
const dice2El = document.querySelector('#dice-2');

const btnRoll = document.querySelector('.btn-roll');

const player0El = document.querySelector('.player-0-panel');
const player1El = document.querySelector('.player-1-panel');


// ---------- 3. Funktioner ----------

// SPEL-1: Startar ett nytt spel
function init() {

}

// SPEL-2: Körs när man klickar på "Slå tärning"
function rollDice() {
    diceElement1.style.visibility = 'visible';
    diceElement2.style.visibility = 'visible';

    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    dice1El.src = `img/dice-${dice1}.png`;
    dice2El.src = `img/dice-${dice2}.png`;

    if (dice1 === 1 || dice2 === 1) {
        switchPlayer();
    } else {
        roundScore += dice1 + dice2;
        document.getElementById(`current-${activePlayer}`).textContent = roundScore;
    }
}

// SPEL-3 och SPEL-4: Körs när man klickar på "Håll poäng"
function holdScore() {

}

// SPEL-2: Byter till den andra spelaren
function switchPlayer() {
    document.getElementById(`current-${activePlayer}`).textContent = '0';

    roundScore = 0;

    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }

    player0El.classList.toggle('active');
    player1El.classList.toggle('active');
}


// ---------- 4. Händelser ----------

btnRoll.addEventListener('click', rollDice);

init();
