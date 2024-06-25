// Note:  the push() function makes the changes in the original array but concat()  creates a brand new array. 
// const pushArr = arr1.push(arr2);
// console.log(arr1);
const arr1 = [0, 1, 2, 3, 4, 5, 6, 7];
const arr2 = [0, 1, 2, 3, 4, 5, 6, 7];

const arr3 = arr1.concat(arr2);
console.log(arr3);
const arr4 = [...arr1, ...arr2];
console.log(arr4);
console.log(typeof arr3, typeof arr4);

console.log(Array.isArray('Raj'));
console.log(Array.isArray([]));

//Note: The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object. Search MDN

console.log(Array.from('RAJ'));

const value1 = 45;
const value2 = 75;
const value3 = 95;
const value4 = 25;

//Note: The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
const allValue = Array.of(value1, value2, value3, value4);
console.log(typeof allValue, allValue);