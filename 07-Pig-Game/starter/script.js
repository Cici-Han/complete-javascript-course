'use strict';

//selecting elements
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  //1.generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. display dice
  diceEL.classList.remove('hidden');
  diceEL.

  //3. check if rolled 1--true, switch to other player
});
