/* Falsy values:
false, 0, -0, BigInt 0n, "", null, undefined, NaN all these are falsy value
*/

/* Truthy values:
all non-empty strings in JavaScript are considered truthy.
"0", "false", " ", {empty object}, [empty array], function(){} all are truthy values
*/

let username = "";

if (username) {
  console.log(`Username is not Empty`);
} else {
  console.log("Username is empty");
}

// Array
let username1 = []; // here empty array are also considered as truthy values.

if (username1.length === 0) {
  console.log(`Username1 is  Empty`);
} else {
  console.log("Username1 is not empty");
}

// To check object
let username2 = {};
// As Object.keys() returns the array, so we can apply 'length' to check.
if (Object.keys(username2).length === 0) {
  console.log(`Username2 is  Empty`);
} else {
  console.log("Username2 is not empty");
}

/* Nullish coalescing Operator (??) : null defined.
It returns the right-hand operand when the left-hand operand is null or undefined. If the left-hand operand is any other value (including falsy values like 0, false, NaN, or an empty string ""), it returns the left-hand operand. 
*/
let val1;
val1 = 5 ?? 10;
val1 = null ?? 15;
val1 = 10 ?? null;

console.log(val1);