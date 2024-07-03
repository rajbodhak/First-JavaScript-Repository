'use strict';

const user = function(username, age, isLoggedin){
    this.username = username;
    this.age = age;
    this.isLoggedin = isLoggedin;
}

const user1 = new user('Henry',52, true);
console.log(user1);

const user2 =new user('Crish', 50, false);
console.log(user2, user2.isLoggedin);
console.log(user1.username, user1.age, user2.username);


// class Person {
//     name;
//     constructor(name) {
//     this.name = name;
//     }

//     introduceSelf() {
//     console.log(`Hi! I'm ${this.name}`);
//     }
// }

// const john = new Person('John');
// john.introduceSelf();