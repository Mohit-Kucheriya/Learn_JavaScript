// Number conversion
let score = undefined;
console.log(typeof score);

let convertNumber = Number(score);
console.log(typeof convertNumber);

/*
Notes
1. "33" => string
2. 33 => number
3. "33abc" => NaN, as its dont get convert into pure number so we get Not a Number(NaN)
4. true => 1, false => 0,
*/

// Boolean conversion
let isLoggedIn = "";
console.log(typeof isLoggedIn);

let isBooleanIsLoggedIn = Boolean(isLoggedIn);
console.log(isBooleanIsLoggedIn);

/*
Notes
1. 1 => true, 0 => false.
2. "" => false
3. "Mohit" => true
*/

// String conversion
let someNumber = 33;

let strNumber = String(someNumber);
console.log(strNumber);
console.log(typeof strNumber);

// Operation conversion
console.log("1" + 2);
console.log(1 + "2");


// Explanation: The operations are evaluated from left to right. First, "1" (a string) is concatenated with 1 (a number, which is converted to a string), resulting in "11". Then, "11" is concatenated with 2, resulting in "112".
console.log("1" + 1 + 2);
// Output: "112"


// Explanation: The first operation is 1 + 2, which is evaluated as a normal arithmetic operation, resulting in 3. Then, 3 (a number) is concatenated with "3" (a string), resulting in "33".
console.log(1 + 2 + "3");
// Output: "33"
