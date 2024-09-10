class RandomUser {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    return `Username is ${this.username}`;
  }
}

class Teacher extends RandomUser {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    return `This course was added by ${this.username}`;
  }
}

const newUser1 = new RandomUser("mohitKucheriya");
console.log(newUser1.logMe());

const newUser2 = new Teacher(
  "teacherUsername",
  "teacher@email.com",
  "teacher123"
);
console.log(newUser2);

console.log(newUser1 instanceof Teacher);


// Static
class protectPassword {
  constructor(username, password) {
    this.username = username;
    this.password = password
  }

  static protectEncryptPassword() {
    return `Your encrypted password is ${this.password}abc123`;
  }
}

class getUser extends protectPassword{
  constructor(username,email,password){
    super(username,password)
    this.email = email
  }
}

const passUser1 = new protectPassword("mohitKucheriya","mohit@");
console.log(passUser1.protectEncryptPassword());

const passUser2 = new getUser("ruchitaJain","ruchi@ca.com","ruchi");
console.log(passUser2.protectEncryptPassword())