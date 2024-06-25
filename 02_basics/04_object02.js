const flipkartUer = {};
    
flipkartUer.id = '#3464556';
flipkartUer.name = 'Alok Adam';
flipkartUer.email = 'alokadam@gamil.com';
flipkartUer.age = 69;

// console.log(flipkartUer);

const obj1 = {1: 'a', 2: 'b', 3: 'c'};
const obj2 = {3: 'd', 5: 'e', 6: 'f'};

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);
// console.log({...obj1, ...obj2})

//Note: Object.assign() can be used to mutate an object, whereas spread syntax can't.

const deepObj = {
    user1: {
        userName: 'Rakesh',
        age: 22,
        education: {
            primary: 'school',
            secondary: 'highSchool',
            collegeSgpa: {
                first: 8,
                second: 9.22,
                third: 6.99,
            }
        }
    },

    user2: {
        userName: 'Rohit',
        age: 21,
        education: {
            primary: 'school',
            secondary: 'highSchool',
            collegeSgpa: {
                first: 9,
                second: 8.22,
                third: 7.09,
            }
        }
    }
}

// console.log(deepObj.user2.education.collegeSgpa.third);
// console.log(deepObj.user1.age);
    
console.log(Object.keys(flipkartUer));
console.log(Object.values(flipkartUer));
console.log(Object.entries(flipkartUer));
console.log(Object.isFrozen(flipkartUer));
Object.freeze(flipkartUer);
console.log(Object.isFrozen(flipkartUer));
console.log(flipkartUer);

console.log(flipkartUer.hasOwnProperty('age'));