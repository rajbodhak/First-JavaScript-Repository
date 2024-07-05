    // getter And Setter 
    // New Approach

    class User {
        constructor(email, password) {
            this.email = email;
            this.password = password;
        }

        get password() {
            return `${this._password}78854`;
        }

        set password(value) {
            this._password = value;
        }

        get email() {
            return `${this._email.toUpperCase()}`;
        }

        set email(value) {
            this._email = value;
        }
    }

    const userOne = new User('userone@gmail.com','userOne@1230');
    console.log(userOne.password);
    console.log(userOne.email);


    //Old Approach

    class Userold {
        constructor(email, password) {
            this._email = email;
            this._password = password;

            Object.defineProperty(this, 'email', {
                get: function() {
                    return `${this._email.toUpperCase()}`;
                },
                set: function(value) {
                    this._email = value;
                }
            })

            Object.defineProperty(this, 'password', {
                get: function() {
                    return `${this._password.toUpperCase()}x78x9x`;
                },
                set: function(value) {
                    this._password = value;
                }
            })
        }        
    }

    const userTwo = new Userold('userTwo@u2.com','u2@123');
    console.log(userTwo.email);
    console.log(userTwo.password);