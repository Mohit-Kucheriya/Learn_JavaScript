/* for of loop
The for...of loop is ideal for iterating over array elements since it directly provides the values of the array in the correct order.
The for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, and other data structures that implement the iterable protocol. It iterates over the values of the elements in the collection.

["","",""]
[{},{},{}]
*/

// Example: 1
let myArr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (const num of myArr) {
  console.log(`Numbers in array are ${num}`);
}

// Example: 2
let greeting = "Hello World";
for (const greet of greeting) {
  if (greet == " ") {
    continue;
  }
  console.log(`Each char of Greeting: ${greet}`);
}

// Map: Unique values, duplication not allowed. Returns the object in key value pair and in the given sequence only.
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("USA", "United States of America");

console.log(map);
for (const [key, value] of map) {
  console.log(key, ":", value);
}

/*
for..in loop
Use for...in when you need to iterate over the keys of an object or when you need to work with the indices of an array,
*/

// Example: 1
const myLanguageObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby on Rails",
  swift: "Swift by Apple",
};

for (const key in myLanguageObject) {
  console.log(key);
  console.log(`${key} is shortForm of ${myLanguageObject[key]}`);
}

// Example: 2
const programmingLanguage = ["JS", "Java", "Ruby", "Swift", "HTML"];
for (const key in programmingLanguage) {
  console.log(key); //Output: 0,1,2,3,4 - indices will be print;
  console.log(programmingLanguage[key]);
}
