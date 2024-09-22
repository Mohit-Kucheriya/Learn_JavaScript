/*
Primitive : 7 types
All the primitive dataTypes are 'call by value' i.e. its original memory reference is not given instead of it, the copy is given & whatever changes are made are made in that copy only
1. String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt
*/
// Example
let str = "Mohit";
console.log(str, typeof str);

let num1 = 10;
console.log(num1, typeof num1);

let isBoolean = false;
console.log(isBoolean, typeof isBoolean);

let checkNull = null;
console.log(checkNull, typeof checkNull);

let isUndefined;
console.log(isUndefined, typeof isUndefined);

let checkSymbol = Symbol("12345");
console.log(checkSymbol, typeof checkSymbol);

/*
Non-primitive data types (also known as reference types)
1. Array
2. Objects
3. Functions
*/

// Example
const heroes = ["Harry Potter", "Ron Wesely", "Hermoine Granger"];
console.log(heroes);
console.log(typeof heroes);

let myObj = {
  name: "Mohit Kucheriya",
  age: 23,
};
console.log(myObj);
console.log(typeof myObj);

const myFunc = function xyz() {
  return "Hello World";
};
console.log(myFunc);
console.log(typeof myFunc);


/*
Notes
JavaScript is dynamically typed language.
Dynamically typed language means that the type of a variable is determined at runtime, rather than at compile time.

let x = 42;       // x is a Number
x = "Hello";      // Now x is a String
x = true;         // Now x is a Boolean

*/
