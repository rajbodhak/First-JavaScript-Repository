'use strict';

const multiplyBy2 = function(num) {
    return num * 2;
}

multiplyBy2.power = 2;

console.log(multiplyBy2(10));
console.log(multiplyBy2.power);
console.log(multiplyBy2.prototype);

function createDrink(item, price) {
    this.item = item;
    this.price = price;
}

createDrink.prototype.priceIncrement = function() {
    return this.price+10;
}

createDrink.prototype.printMe = function() {
    
    console.log(`The price of ${this.item} is ${this.priceIncrement()}`);
}

const milk =new createDrink('milk', 45);
console.log(milk.priceIncrement());
milk.printMe();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/