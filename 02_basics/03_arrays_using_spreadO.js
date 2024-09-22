// Key Uses of the Spread Operator

// 1. Array Expansion:

// a. Copying an Array:
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2); // Outputs: [1, 2, 3]
console.log(arr1 === arr2); // Outputs: false (different references)

// b. Merging Arrays:
let arr3 = [1, 2];
let arr4 = [3, 4];
let mergedArray = [...arr3, ...arr4];
console.log(mergedArray); // Outputs: [1, 2, 3, 4]

// c. Adding Elements to an Array:
let arr = [3, 4];
let newArr = [1, 2, ...arr, 5, 6];
console.log(newArr); // Outputs: [1, 2, 3, 4, 5, 6]


// 2. Function Arguments:

// a. Passing an Array to a Function:
function sum(a, b, c) {
  return a + b + c;
}

let numbers = [1, 2, 3];
console.log(sum(...numbers)); // Outputs: 6

// b. Using Math.max with an Array:
let numbers1 = [1, 5, 3, 7, 2];
let max = Math.max(...numbers1);
console.log(max); // Outputs: 7


// 3. Object Expansion (ES2018+):

// a. Copying an Object:
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1 };
console.log(obj2); // Outputs: { a: 1, b: 2 }

// b. Merging Objects:
let obj3 = { a: 1, b: 2 };
let obj4 = { b: 3, c: 4 };
let mergedObj = { ...obj3, ...obj4 };
console.log(mergedObj); // Outputs: { a: 1, b: 3, c: 4 }

// Adding or Overriding Properties:

let obj = { a: 1, b: 2 };
let newObj = { ...obj, c: 3, a: 4 };
console.log(newObj); // Outputs: { a: 4, b: 2, c: 3 }


// 4. String Expansion:

// a. Converting a String to an Array of Characters:
let str = "hello";
let chars = [...str];
console.log(chars); // Outputs: ['h', 'e', 'l', 'l', 'o']

// Key Points:
// a. Shallow Copy: The spread operator creates a shallow copy of the array or object, meaning nested objects or arrays are still referenced rather than deeply copied.

// b. Function Arguments: It's especially useful for passing elements of an array as individual arguments to a function.

// c. Object Properties: In objects, if keys conflict, the last key-value pair in the spread will overwrite the earlier ones.
