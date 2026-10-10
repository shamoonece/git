'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Answer';
// document.querySelector('.number').textContent = 50;
// document.querySelector('.score').textContent = 25;

// document.querySelector('.guess').value = 30;
// console.log(document.querySelector('.guess').value);
let randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = randomNumber();
let score = Number(20);
let highScore = 0;
let guess = 0;
console.log(secretNumber);

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = randomNumber();
  console.log(secretNumber);
  score = 20;
  document.querySelector('.number').textContent = '?';
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage(
    'Hello Good Morning, Welcome to Shamoons Guessing Game Start guessing...'
  );
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.score').textContent = 0;
});

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);
  // When there is no value
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
    displayMessage('No Number');
    // When the guess is correct
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent = 'Correct';
    document.querySelector('body').style.backgroundColor = '#3cc157';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highScore === 0 && score > 0) {
      highScore = score;
    } else if (highScore < score) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
    //when the guess is low
  } else if (secretNumber != guess) {
    if (score > 0) {
      console.log(secretNumber);
      console.log(guess);
      displayMessage(secretNumber > guess ? 'Too Low' : 'Too High');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost!';
      displayMessage('You Lost');
    }
  }
  // else if (secretNumber > guess) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost!';
  //   }
  //   // when the guess in high
  // } else if (secretNumber < guess) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too High';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost!';
  //   }
  // }
});
