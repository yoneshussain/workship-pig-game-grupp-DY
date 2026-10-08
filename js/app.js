// =============================================
// Grisspelet
// =============================================

// ---------- 1. Speldata ----------

const WINNING_SCORE = 100; // Poäng som krävs för att vinna

let scores = [0, 0]; // Totalpoäng: scores[0] = Spelare 1, scores[1] = Spelare 2
let roundScore = 0; // Omgångspoäng för den aktiva spelaren
let activePlayer = 0; // 0 = Spelare 1, 1 = Spelare 2
let isPlaying = true; // Blir false när någon har vunnit

// ---------- 2. Element i DOM:en ----------


//SPEL-2 Ticket-slå-tärning Ansvarig: Daniel Ringel
const dice1El = document.querySelector('#dice-1');
const dice2El = document.querySelector('#dice-2');

const btnRoll = document.querySelector('.btn-roll');

const player0El = document.querySelector('.player-0-panel');
const player1El = document.querySelector('.player-1-panel');

// yones elementer i DOM:en
const score0 = document.querySelector("#score-0");
const score1 = document.querySelector("#score-1");
const name0 = document.querySelector("#name-0");
const name1 = document.querySelector("#name-1");
const player0_panel = document.querySelector(".player-0-panel");
const player1_panel = document.querySelector(".player-1-panel");
const diceElement1 = document.querySelector("#dice-1");
const diceElement2 = document.querySelector("#dice-2");
const newgameBtn = document.querySelector(".btn-new");
const currentScore1 = document.querySelector("#current-0");
const currentScore2 = document.querySelector("#current-1");

// ---------- 3. Funktioner ----------

// SPEL-1: Startar ett nytt spel
function init() {
  document.addEventListener("DOMContentLoaded", () => {
    score0.textContent = "0";
    score1.textContent = "0";
    name0.textContent = "Spelare 1";
    name1.textContent = "Spelare 2";
    currentScore1.textContent = "0";
    currentScore2.textContent = "0";

    player0_panel.classList.add("active");
    player1_panel.classList.remove("active");

    player0_panel.classList.remove("winner");
    player1_panel.classList.remove("winner");

    diceElement1.style.visibility = "hidden";
    diceElement2.style.visibility = "hidden";
  });

  newgameBtn.addEventListener("click", () => {
    score0.textContent = "0";
    score1.textContent = "0";
    name0.textContent = "Spelare 1";
    name1.textContent = "Spelare 2";
    currentScore1.textContent = "0";
    currentScore2.textContent = "0";

    player0_panel.classList.add("active");
    player1_panel.classList.remove("active");

    player0_panel.classList.remove("winner");
    player1_panel.classList.remove("winner");

    diceElement1.style.visibility = "hidden";
    diceElement2.style.visibility = "hidden";
  });
}

// SPEL-2: Körs när man klickar på "Slå tärning"
function rollDice() {
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
function holdScore() {}

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
