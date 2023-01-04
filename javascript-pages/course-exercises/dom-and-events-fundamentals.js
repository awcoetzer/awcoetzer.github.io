'use strict';

//////////////////// Lecture 70 - 77 ////////////////////
console.log('🦞 Project 1');
console.log('🦞 LECTURE 70 - 77');

// const guessButton = document.querySelector('.guess-btn');

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// guessButton.addEventListener('click', () => {
//   let guess = parseInt(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   // Check if there is input
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔ No Number Chosen';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = "🥳 Yay! That's correct!";
//     document.querySelector('.message').style.color = '#4ade80';
//     document.querySelector('.secret-number').textContent = secretNumber;
//     document.querySelector('.secret-number').style.color = '#4ade80';
//     if (score > highscore) {
//       highscore = score;
//     }
//     document.querySelector('.highscore').textContent = highscore;
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You Lost';
//       document.querySelector('.message').style.color = '#f87171';
//       document.querySelector('.secret-number').textContent = secretNumber;
//       document.querySelector('.secret-number').style.color = '#f87171';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You Lost';
//       document.querySelector('.message').style.color = '#f87171';
//       document.querySelector('.secret-number').textContent = secretNumber;
//       document.querySelector('.secret-number').style.color = '#f87171';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// const againButton = document.querySelector('.again-btn');

// againButton.addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   score = 20;
//   document.querySelector('.message').textContent = 'Waiting for a guess...';
//   document.querySelector('.message').style.color = 'var(--clr-tint)';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.secret-number').textContent = '?';
//   document.querySelector('.secret-number').style.color = 'var(--clr-tint)';
//   document.querySelector('.guess').value = '';
// })

console.log('');

//////////////////// Lecture 78 ////////////////////
console.log('🦞 Project 1 - Refactor');

// First we selected all the element we will be working with.
const guessEl = document.querySelector('.guess');
const guessBtnEl = document.querySelector('.guess-btn');
const againBtnEl = document.querySelector('.again-btn');
const messageEl = document.querySelector('.message');
const secretNumberEl = document.querySelector('.secret-number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');

// Below we refactored everything that was repeating into a function.
const displayMessage = function (message) {
  messageEl.textContent = message;
};

const displayMessageColor = function (color) {
  messageEl.style.color = color;
};

const displaySecretNumber = function (value) {
  secretNumberEl.textContent = value;
};

const displaySecretNumberColor = function (color) {
  secretNumberEl.style.color = color;
};

const displayScore = function (value) {
  scoreEl.textContent = value;
};

// These are the variables to help with the games logic.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Here we listening for the check button, and then we perform
// various actions which involve the games logic.
guessBtnEl.addEventListener('click', function () {
  let guess = parseInt(guessEl.value);

  // Checking if there is no input into the input field called
  // guess, then we display No number.
  if (!guess) {
    displayMessage('⛔ No Number Chosen');

    //
  } else if (guess === secretNumber) {
    displayMessage("🥳 Yay! That's correct!");
    displayMessageColor('#4ade80');
    displaySecretNumber(secretNumber);
    displaySecretNumberColor('#4ade80');

    // Below we check for the highscore, if the score is higher than
    // the highscore, then the highscore becomes that score.
    if (score > highscore) {
      highscore = score;
    }
    highscoreEl.textContent = highscore;

    //  Below we check if the number is different to the secret number
    // and if its still above the score of 1.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Instead of writing 2 else if statements, we use a ternary
      // operator to provide a value of either too high, or too low.
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You Lost');
      displayMessageColor('#f87171');
      displaySecretNumber(secretNumber);
      displaySecretNumberColor('#f87171');
      displayScore(0);
    }
  }
});

// Here we listen if the the again button was clicked and then
// reset all the values to their default value. Note that highscore
// was not included in the reset
againBtnEl.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Waiting for a guess...');
  displayMessageColor('var(--clr-tint)');
  displayScore(score);
  displaySecretNumber('?');
  displaySecretNumberColor('var(--clr-tint)');
  guessEl.value = '';
});

console.log('');

//////////////////// Color Controller ////////////////////
console.log('😎 My Project - Color Controller');
console.log('😎 Color Controller');

const colorController = document.querySelector('.color-controller');
const colorValue = document.querySelector('.color-option--value');

const randomColor = function () {
  let h = Math.trunc(Math.random() * 360) + 1;
  let s = Math.trunc(Math.random() * 100) + 1;
  let l = Math.trunc(Math.random() * 100) + 1;

  return `hsl(${h}, ${s}%, ${l}%)`;
};


document.addEventListener('keydown', function (e) {
  let currentColor = randomColor();

  if (e.key === 'g' || e.key === 'G') {
    colorController.style.backgroundColor = currentColor;
    colorValue.textContent = currentColor;
  }
});

console.log('');

//////////////////// Lecture 79 - 81 ////////////////////
console.log('🦞 Project 2');
console.log('🦞 LECTURE 79 - 81');

console.log('');

//////////////////// Lecture 82 - 86 ////////////////////
console.log('🦞 Project 3');
console.log('🦞 LECTURE 82 - 86');

console.log('');
