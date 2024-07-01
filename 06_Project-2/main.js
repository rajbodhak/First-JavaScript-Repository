'use strict';

// the formula for BMI is weight in kilograms (kg) divided by height in meters (m) squared

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const weightGuild = document.querySelector('#weight-guide');

    const weightGuildCheck = function(bmi) {
        weightGuild.classList.remove('underweight', 'normal', 'overweight');
        if(bmi < 18.6) {
            weightGuild.innerHTML = `You are UnderWeight`;
            weightGuild.classList.add('underweight')
        }
        else if(bmi > 24.9) {
            weightGuild.innerHTML = `You are OverWeight`;
            weightGuild.classList.add('overweight');
        }
        else {
            weightGuild.innerHTML = `You are Normal`;
            weightGuild.classList.add('normal');
        }
    }

    if(height === '' ||height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height`;
    } else if(weight === '' ||weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight`;
    } else {
        const bmi = (weight / ((height * height)/ 10000)).toFixed(2);
        result.innerHTML = `<span> Your BMI is ${bmi}</span>`;
        weightGuildCheck(bmi);
    }
});
