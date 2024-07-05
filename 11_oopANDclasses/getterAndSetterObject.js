const User = {
    _email : 'user@g.com',
    _password: 'user@123',

    get email() {
        return `${this._email.toUpperCase()}`;
    },

    set email(value) {
        this._email = value
    },

    get password() {
        return `${this._password.toUpperCase()}74474eerr`;
    },

    set password(value) {
        this._password = value
    }
}

const userThree = Object.create(User);
console.log(userThree.email);
console.log(userThree.password);