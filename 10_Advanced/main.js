'use strict';

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
        console.log('Async Task is complete');
    },1000)
});

promiseOne.then(() => {
    console.log("Promise comsumed");
});

new Promise((resolve, regect) => {
    setTimeout(() => {
        console.log('Async Task complete');
        resolve()
    },2000);
}).then(() => console.log('Promise 2 consumed'));

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: 'Rohan', passWord: '699'});
    }, 3000);
});

promiseThree.then((user) => {
    console.log(user);
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: 'Raj', passWord: '852'});
        }
        else{
            reject('Error! Somthing Went wrong!');
        }
    },4000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Either Resolved or Reject');
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: 'Java', passWord: '852'});
        }
        else{
            reject('Error! Java Went wrong!');
        }
    },5000)
})


async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    }
    catch(error) {
        console.log(error);
    }
}
consumePromiseFive();

async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error: ', error);
    }
}
fetchUser();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))