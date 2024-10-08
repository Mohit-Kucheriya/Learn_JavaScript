const user = {
  username: "Mohit",
  isLoggedIn: true,
  email: "kucheriya@example.com",

  // Here 'this' refer to the current context i.e the user object.
  getUserDetails: function () {
    console.log(`Heeloo my name is ${this.username}!`);
  },
};

console.log(user);
console.log(user.getUserDetails());

function userOne(username, isLoggedOut, numberOfLoggedIn) {
  this.username = username;
  this.isLoggedOut = isLoggedOut;
  this.numberOfLoggedIn = numberOfLoggedIn;
}

const printUserOne = new userOne("mohit-kucheriya", true, 8);
console.log(printUserOne);
