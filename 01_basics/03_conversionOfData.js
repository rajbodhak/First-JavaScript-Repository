"use strict";

let score = '666rock';
// console.log(typeof score);
// console.log(typeof (score));

/* <---------- Number ---------> */

let valueInNumber = Number(" ");
// console.log(valueInNumber);

//Number of null => 0
//Number of undefined => NaN
//Number of "666rock" => NaN
//Number of true => 1, false => 0
//Number of " " => 0

/* <---------Boolean---------> */

let isLoggedIn = " ";

let inBoolean = Boolean(isLoggedIn);
// console.log(inBoolean);
// console.log(typeof inBoolean);

//True in Boolean => True;
//False in Boolean => false;
//Number in Boolean => True;
//Filled String in Boolean => True;
//Empty String ("") in Boolean => False;
//But if String containts a space (" ") => True;


/* <---------String----------> */
let someValue = 89;

let inString = String(someValue);
// console.log(inString);
// console.log(typeof inString);

// Number in String => String;

/* <---------------Operations-----------------> */

/* 
let value = 69;
let negValue = -value;
console.log(negValue);

let str1 = "Raj";
let str2 = "Bodhak";
let str3 = str1 + " " + str2;
console.log(str3);

console.log('1' + 2);
console.log(1 + '2');
console.log('1' + 2 + 3);
console.log('1' + '2' + 3);
console.log('1' + 2 + '3');
console.log( (3 + 4) * 5 % 3);

console.log(+true);
console.log(-true);
console.log(+'');
*/

let num1, num2, num3;

num1 = num2 = num3 = 6 + 9;
console.log(num1);
console.log(num2);
console.log(num3);

let counter = 100;
let moreCounter = 100;
moreCounter++;
++counter;
console.log(counter);
console.log(moreCounter);