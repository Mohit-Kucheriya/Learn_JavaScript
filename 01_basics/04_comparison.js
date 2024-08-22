console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* Notes
The reason is that an equality check == and comparison > < >= <= works differently.
Comparsion converts null to an number, treating it as 0.
That's why null >=0 is true, and null > 0 is false

In relational comparisons (>=, <=, >, <), null is coerced into 0.
Example in relational comparison
console.log(null >= 0); // true
console.log(null <= 0); // true
console.log(null > 0);  // false
console.log(null < 0);  // false
*/


/*
How null behaves in comparison:
With == (loose equality):

null is only loosely equal to undefined, and nothing else.
null == undefined is true.
null == 0 is false.

null converts to 0 only in specific arithmetic operations (like +, -, *, /), but not in comparisons.
*/



