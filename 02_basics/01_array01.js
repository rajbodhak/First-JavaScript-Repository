const arr1 = [0, 1, 2, 3, 4, 5, 6, 7];
const arr2 = [0, 1, 2, 3, 4, 5, 6, 7];
arr1.push(4);    
arr1.pop();
console.log(arr1.includes(19));
console.log(arr1.includes(3));
console.log(arr1.join()); //Changed into Object
console.log(arr1);

console.log("A-0", arr1);
console.log(arr1.slice(1, 3));
console.log("A-1", arr1);

console.log("A-0", arr2);
console.log(arr2.splice(1, 3));
console.log("A-1", arr2);

/* *** slice() creates a new array with a portion of elements copied from the original array, while splice() mutates the original array itself by removing, replacing or adding elements to it */