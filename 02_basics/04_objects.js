// There are two ways of creating objects i.e using object literals & constructor.

/* Object Literals : 
In object we have key:value pairs, and each such pair is  called property.
string,boolean,number,array,functions,or even objects can be assign as values to the key. 
*/

/*
all keys in an object are treated as strings. Even if we define an object key as a number or a symbol, JavaScript will convert it to a string (except for symbols, which are unique and not converted).
*/

// Two ways to access the key i.e using obj.key & obj["key"](using square notaion with "")

let obj1 = {}; // this is empty object

const mySymbol = Symbol("key1");
let obj2 = {
  name: "Mohit",
  "full name": "Mohit Kucheriya",
  age: 23,
  email: "kucheriya@google.com",
  isLoggedIn: false,
  lastLoggedIn: ["Monday", "Saturday"],
  [mySymbol]: "To access the symbol use obj[symbol] i.e using square bracket",
};

console.log(obj2.name);
console.log(obj2["email"]);
console.log(obj2[mySymbol]);
console.log(obj2["full name"]);
console.log(obj2);

// To change the values 
obj2.email = "kucheriya@microsoft.com";

obj2.greeting = function(){
    console.log("Hello JS User");
}

obj2.greeting2 = function(){
    // when we want to refer the same object we use 'this' keyword.
    console.log(`Helloo JS User, ${this.name}`)
    console.log(`Helloo JS User, ${this["full name"]}`)
}

console.log(obj2.greeting2());


/* Object.freeze() prevents modifications to an object. When we freeze an object, we make it immutable—meaning we cannot add, remove, or modify properties on that object.

Example:
const person = {
    name: "Alice",
    age: 30
};

Object.freeze(person);

a. Attempting to modify properties
person.name = "Bob";  // No effect
person.age = 35;      // No effect

b. Attempting to add new properties
person.gender = "female";  // No effect

c. Attempting to delete properties
delete person.age;  // No effect

console.log(person);  
 Output: { name: 'Alice', age: 30 }
*/



// Notes : For Symbol
/*
Uniqueness: Each symbol is unique, even if you create two symbols with the same description.

const sym1 = Symbol("mySymbol");
const sym2 = Symbol("mySymbol");

console.log(sym1 === sym2);  // Output: false
*/
