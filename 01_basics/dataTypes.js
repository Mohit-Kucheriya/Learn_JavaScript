"use strict"; // treat all JS code as newer version.

// alert(3 + 3), this is not wrok same as in browser because we are using node.

let str = "Mohit Kucheriya";
let isLoggedIn = false;
const uniqueId = 12345;

console.table([typeof str, typeof isLoggedIn, typeof uniqueId]);


/* Notes:
DataTypes
Primitive 
1. Number : 123, 2 the power 53
2. String : "Mohit", anything inside the "" is called string
3. biginit : to use when integer value are larger
4. Boolean : true/false, either true or false
5. undefined : not assigned value yet, [typeof of undefined is undefined]
6. null : we write explicitly to assign the value to null [typeof of null is object]
7. symbol : unique

Non-Primitive
1. Object
*/
