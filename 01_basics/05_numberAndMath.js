'use strict';

///////////////-------NUMBER----------/////////////////

let number = 3455;
console.log(number.toString()); //Expected Output 3455 [but in string]

let number1 = 748.9999999999999999;
console.log(number1.toFixed(2)); //Expected output 748.99

let number2 = 69.6969;
console.log(number2.toPrecision(2)); //Expected 70
console.log(number2.toPrecision(3)); //Expected 69.7

let number3 = 1000000000000;
console.log(number3.toLocaleString("en-IN")); //Expected 10,00,00,00,00,000

let number4 = 34453;
console.log(number4.valueOf()); //Expected 34453

//<------------------ MATH ------------------->//
console.log(Math.abs(-8)); //Expected Value 8
console.log(Math.round(69.99)); //Expected 70 (rounding)
console.log(Math.ceil(69.99)); //Expected 70 (take max possible number)
console.log(Math.floor(69.99)); //Expected 69 (take min possible number)
console.log(Math.max(5,8,9,6,7,4)); //Expected 9 (max)
console.log(Math.min(5,8,9,6,7,4)); //Expected 4 (min)
console.log(Math.trunc(6.9)); //Expected 6 (remove decimal parts)

let randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomNumber(10, 20));