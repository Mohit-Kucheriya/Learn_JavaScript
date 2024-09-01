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
