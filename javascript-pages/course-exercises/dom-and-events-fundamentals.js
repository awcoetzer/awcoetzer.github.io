'use strict';

//////////////////// Lecture 70 - 77 ////////////////////
console.log('🦞 Project 1');
console.log('🦞 LECTURE 70 - 77');

const guessButton = document.querySelector('.guess-btn');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

guessButton.addEventListener('click', () => {
  let guess = parseInt(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Check if there is input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number Chosen';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = "🥳 Yay! That's correct!";
    document.querySelector('.secret-number').textContent = secretNumber;
    document.querySelector('.message').style.color = '#4ade80';
    document.querySelector('.secret-number').style.color = '#4ade80';
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost';
      document.querySelector('.message').style.color = '#f87171';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost';
      document.querySelector('.message').style.color = '#f87171';
      document.querySelector('.score').textContent = 0;
    }
  }
});

const againButton = document.querySelector('.again-btn');

againButton.addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Waiting for a guess...';
  document.querySelector('.message').style.color = 'var(--clr-tint)';
  document.querySelector('.score').textContent = score;
  document.querySelector('.secret-number').textContent = '?';
  document.querySelector('.secret-number').style.color = 'var(--clr-tint)';
  document.querySelector('.guess').value = '';
})

console.log('');

//////////////////// Lecture 78 ////////////////////
console.log('🦞 Project 1 - Refactor');

console.log('');

//////////////////// Lecture 79 - 81 ////////////////////
console.log('🦞 Project 2');
console.log('🦞 LECTURE 79 - 81');

console.log('');

//////////////////// Lecture 82 - 86 ////////////////////
console.log('🦞 Project 3');
console.log('🦞 LECTURE 82 - 86');

console.log('');
