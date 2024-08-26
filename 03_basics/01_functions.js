function sayMyName() {
  console.log("Hello World");
}
sayMyName; // function reference
sayMyName(); // function call or invocation.

// This function will only console the value
function addTwoNumber(num1, num2) {
  console.log(num1 + num2);
}
addTwoNumber(10, 20);

// we can save the function as value in the other variable. So we have to return the function.
function addTwoNumber1(num3, num4) {
  return num3 + num4;
}
let result = addTwoNumber1(12, 15);
console.log(result);

// Best Practice is to give a default value
function sayHello(username = "Sam") {
  // By giving default name 'if statement will never execute'.
  if (!username) {
    console.log("Please enter a valid username.");
    return;
  }
  return `${username} just logged-in!`;
}
console.log(sayHello());

/* If we want to send multiple value as arguments we can use ...rest opaerator. It return the array.
Example
*/

function calculateCartPrice(...price) {
  return price;
}

console.log(calculateCartPrice(100, 2000, 500));

function getGST(d1, d2, ...gst) {
  console.log(`Gst on Mobile phone is ${d1}%`);
  return gst;
}

console.log(getGST(5, 7, 10, 12, 15));

// Passing objects as argument
let passObj = {
  name: "Mohit",
  age: 23,
};

function getInfo(anyObj) {
  // Simply de-Structure the object
  let { name, age } = anyObj;
  console.log(`Hello my name is ${name} I'm ${age} year old!`);
}

getInfo(passObj);

getInfo({
  name: "Lexi",
  age: 23,
});

// Passing Array
const myArray = [11, 12, 13, 14, 15];

function getMyArray(getArray) {
  return getArray[10];
}

console.log(getMyArray(myArray));
