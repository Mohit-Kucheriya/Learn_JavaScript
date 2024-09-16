/*
Note: Always rember to add '_' so, we don't get in the conflicit.
getter: Always return the value from get, because user id getting somevalue so we have to return something.

setter: In setter we dont return anything. In setter value gonna be stored as the original only
*/

class randomName {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value;
  }
}

const newUser1 = new randomName("Mohit Kucheriya", "abcd");
console.log(newUser1);
