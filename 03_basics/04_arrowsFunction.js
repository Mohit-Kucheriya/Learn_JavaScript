// Note:  When we refer thr current context we use 'this' keyword.
const user = {
  username: "Mohit",
  email: "user@google.com",
  price: 999,

  welocomeGreeting: function () {
    console.log(`Heeelo ${this.username}, Welcome to website!`);
    // refer to the current object context.
    console.log(this);
  },
};

user.welocomeGreeting();

// In node, 'this' to the object is the 'empty object{}' to the global level
console.log(this);

// Arrow Function ()=>{}
// Note : {} are compulsory when we use return keyword
const arrowFunc = (num1, num2) => {
  return num1 + num2;
};

console.log(arrowFunc(3, 100));

// Implicit Return : Don't use return keyword with '{}' brackets, this only works if we have only one line to execute.
const impArr = (mul1, mul2) => mul1 * mul2;
const impArr1 = (mul1, mul2) => mul1 * mul2;

console.log(impArr(2150, 4182));
console.log(impArr1(21, 82));

// To pass object we have to use '()' parethesis.
const objArr = () => ({
  username: "mohit123@",
  email: "kucheriya@google.com",
});

console.log(objArr);
