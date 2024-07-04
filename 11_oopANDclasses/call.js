const setUserName = function(userName) {
        this.userName = userName;
    }

    const createUserName = function(userName, age, email) {
        setUserName.call(this, userName);
        this.age = age;
        this.email = email;
    }

    const userJohn = new createUserName('John',45,'john@john.com');
    console.log(userJohn);