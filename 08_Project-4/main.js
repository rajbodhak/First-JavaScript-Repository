'use strict';

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guessesDisplay = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const randomNumber = parseInt((Math.random() * 100) + 1);
const guessHeadText = document.querySelector('#guess');

// guessSubmit.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('Hello');
// })

let previousGuesses = [];


document.querySelector('#wrapper').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const currentNumber = Number(guessField.value);
    previousGuesses.push(currentNumber);
    guessesDisplay.textContent = `${previousGuesses.join(', ')}`;
    const remainingGuess = Number(lastResult.innerHTML);

    if(currentNumber === randomNumber) {
        lowOrHi.innerHTML = `Congratulations! You got it right!`;
        lowOrHi.classList.add('green');
        guessHeadText.innerHTML = 'Start Over';
        guessHeadText.classList.add('red');
        setGameOver();
    }
    else {
        if (remainingGuess === 0) {
            lastResult.textContent = `Sorry, you've run out of guesses! The number was ${randomNumber}.`;
            lastResult.classList.add('red');
            guessHeadText.innerHTML = 'Start Over';
            guessHeadText.classList.add('red');
            setGameOver();

        }
        else {
            if(currentNumber < randomNumber) {
                lowOrHi.innerHTML = `Your Current guess ${currentNumber} is Low!`;
                lastResult.innerHTML = remainingGuess - 1;
            } else {
                lowOrHi.innerHTML = `Your Current guess ${currentNumber} is High!`;
                lastResult.innerHTML = remainingGuess - 1;
            }
        }
    }
    guessField.value = '';
    guessField.focus();
});

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
}