class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeCase() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new User("mohitKucheriya", "kucheriya@gmail.com", 123);
console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.changeCase());

// Behind the scene
function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User1.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User1.prototype.changeCase = function () {
  return `${this.username.toUpperCase()}`;
};

const user2 = new User1("ruchitaJain", "jain@example.com", "caRuchita");
console.log(user2.encryptPassword());
console.log(user2.changeCase());
