'use strict';
// Random dice roll (1-6)
// player 1 always starts first
//If it's not 1, add it up to the player's current score, and switch the player.
// If it's 1, delete the current score and let the player roll the dice again.
// Applying those to the "New Game" button.
// In the

/*All the things that are gonna be displayed:
-random dice rolls
-players' current scores
-if player's score is below 100, add the score to the current score
-If one reaches the 100 score, "%d won the game!"*/
let playing = true;
let playerScore0 = document.querySelector('#score--0');
let playerScore1 = document.getElementById('score--1');
let currScore0 = document.getElementById('current--0');
let currScore1 = document.getElementById('current--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let scores = [0, 0];
let currentPlayer = 0;
let currentScore = 0;
let btnRoll = document.querySelector('.btn--roll');
let btnNew = document.querySelector('.btn--new');
let btnHold = document.querySelector('.btn--hold');
let diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');
let newBtnFunc = function () {
  currentPlayer = 0;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.toggle('player--active');
  diceEl.classList.add('hidden');
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  currScore0.textContent = '0';
  currScore1.textContent = '0';
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  playerScore0.textContent = '0';
  playerScore1.textContent = '0';
};
let winner = function () {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add('player--winner');
};
const switchPlayer = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
newBtnFunc();
btnRoll.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.remove('hidden');
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    // Manipulating source property of HTML by javascript!!!⬇️
    diceEl.src = `dice-${diceRoll}.png`;
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  } else {
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    if (scores[currentPlayer] >= 100) {
      playing = false;
      winner();
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--active');
    } else {
      switchPlayer();
    }
  } else {
  }
});
btnNew.addEventListener('click', newBtnFunc);
