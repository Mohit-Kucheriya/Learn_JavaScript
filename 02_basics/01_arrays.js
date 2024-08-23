/*
Array has two prtotype one "Array" and inside that "object prototype".
*/
const arr = [10, 20, 30, 40, 50];
console.log(arr);
console.log(arr[0]);

// Array Methods
// These methods are used to add and remove the element from array, but only from starting & ending.

let methodArray = [101, 201, 301, 401];
console.log(methodArray);

// Add the element in last of array and return the length the of array.
console.log(methodArray.push(501));
console.log(methodArray);

// Remove the element from last and return the remove element.
console.log(methodArray.pop());
console.log(methodArray);

// Add the element in the start of array and return the length of array.
console.log(methodArray.unshift(100));
console.log(methodArray);

// Remove the element from start and return the remove element
console.log(methodArray.shift());
console.log(methodArray);

// (The includes method in JavaScript is used to determine whether a given string or array contains a specific element or substring. It returns true if the element or substring is found, and false otherwise.)
console.log(methodArray.includes(99));

// The indexOf method in JavaScript is used to find the index of the first occurrence of a specified value within a string or an array. If the value is found, it returns the index of the first match. If the value is not found, it returns -1.
console.log(methodArray.indexOf(101));

// The join method in JavaScript is used to combine all elements of an array into a single string. It inserts a specified separator between the elements in the resulting string.
let joinMethodArray = methodArray.join("-");
console.log(typeof methodArray, "here type is object");
console.log(typeof joinMethodArray, "here type is string");

// Two important methods are slice and splice.
let impArr = [10, 11, 12, 13, 14];
console.log("A", impArr);

/* slice methods accepts two parameters starting & ending index and returns the copy, it doesn't change the original array.
The slice method is used to create a shallow copy of a portion of an array into a new array. It does not modify the original array.
*/
console.log(impArr.slice(1, 2));
console.log("B using slice", impArr);

/*
The splice method is used to add or remove elements from an array, modifying the original array in place.
*/
let spliceImpArr = impArr.splice(0, 2);
console.log("C using splice, remove elements", spliceImpArr);
console.log("Original Array", impArr);
