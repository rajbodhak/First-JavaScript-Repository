    // const user = function(username, age, isLoggedin){
    //     this.username = username;
    //     this.age = age;
    //     this.isLoggedin = isLoggedin;
    // }

    // const user1 = new user('Henry',52, true);
    // console.log(user1);

    // const user2 =new user('Crish', 50, false);
    // console.log(user2, user2.isLoggedin);
    // console.log(user1.username, user1.age, user2.username);

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


    /* ---------------- ADvance Classes-----------------*/
    
    class User {
        constructor(userName, email, password) {
            this.userName = userName;
            this.email = email;
            this.password = password;
        }

        passwordEncryption() {
            console.log(`Your PassWord is ${this.password}4c5d`);
        }

        callme() {
            console.log(`Hello! this is ${this.userName} and email is ${this.email}`);
        }


        //
        static heyStatic = 'Hello this is Static';
    }

    const userOne = new User('Shyam', 'shyam@gmial.com', 'shjdbf3i4u8');
    userOne.passwordEncryption();
    userOne.callme();


    //Static Calling
    console.log(userOne.heyStatic);
    console.log(User.heyStatic);

    const userTwo = new User('Roman');

    class Teacher extends User{
        constructor(userName, email, password) {
            super(userName);
            this.email = email;
            this.password = password;
        }

        callTeacher() {
            console.log(`Say Hello to our new Teacher -> ${this.userName} and his/her Gamil is -> ${this.email}`);
        }
    }

    const teacher = new Teacher('Sadesh','sadesh@google.com','45454545');
    teacher.callTeacher();
    teacher.callme();
    teacher.passwordEncryption();

    // console.log(Teacher instanceof User);
    // console.log(userOne instanceof User);
    // console.log(teacher instanceof User);
    // console.log(userOne instanceof Teacher);
    // console.log(User instanceof Teacher);
    // console.log(userTwo instanceof User);