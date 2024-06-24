'use strict';

const myDate = new Date();
console.log(myDate);

console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMilliseconds());
console.log(myDate.getMinutes());
console.log(myDate.getMonth() + 1); //0 i based
console.log(myDate.getSeconds());
console.log(myDate.getTime());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getUTCDate());
console.log(myDate.getUTCDay());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString('en-in'));
console.log(myDate.toLocaleTimeString('en-in'));
console.log(myDate.toDateString().split(' '));

const weekDay = myDate.toLocaleString('default', {
    weekday: "short",
    minute: "numeric"
});

console.log(weekDay);

