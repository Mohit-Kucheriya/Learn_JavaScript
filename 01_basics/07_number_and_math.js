const score = 400;
console.log(score);
console.log(typeof score);
// Here type of score is number

const newScore = new Number(100);
console.log(newScore);
console.log(typeof newScore);
// Here type of newScore is Object

let numberToString = newScore.toString();
console.log(numberToString);
console.log(typeof numberToString); // string

// Here we have converted number into string, so we can apply string method to it, let check
console.log(numberToString.charAt(1));
console.log(numberToString.includes("hello"));

const num1P = 123.548;
console.log(num1P.toFixed(2));

const hundredNumber = 10000;
console.log(hundredNumber.toLocaleString());

// Math in JS
// abs : -ve to +ve only not vice-versa
console.log(Math.abs(-4.2));

// Round off the value
console.log(Math.round(11.2255));

// Nearest Highest Integer
console.log(Math.ceil(4.2));

// Nearest Smaller Integer
console.log(Math.floor(4.2));

// Random Number: Gives the random number between 0 to 1.To access the from 1 to 10 we use,
console.log(Math.random() * 10 + 1);
// Now, to get the Nearest Integer we use Math.floor()
console.log(Math.floor(Math.random() * 10) + 1);

// To get the number between min and max, below is the formula
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
