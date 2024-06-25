const user = {
    name: 'Rahul',
    age: 20,
    college: 'SVU',
    isLoggedIn: true,
    email: 'rahulchapri@gmail.com',
    mostActive: ['Sunday', 'Tuesday', 'Thurshday'],
}
console.log(user.mostActive);
console.log(user['age']);

user.greeting = function() {
console.log(`Hello user, ${this.name}`);
}
user.greeting();