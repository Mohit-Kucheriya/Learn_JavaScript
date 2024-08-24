// Note: We can have Nested objects also and to access them we simply use i.e "obj.username.firstname"
const userTinder = {
  email: "tinder@google.com",
  fullname: {
    username: {
      firstName: "Mohit",
      lastName: "Kucheriya",
    },
  },
  isLoggedIn: false,
};

console.log(userTinder);
console.log(userTinder.fullname);
console.log(userTinder.fullname.username);
console.log(userTinder.fullname.username.firstName);

/*
Object.assign() is a JavaScript method used to copy properties from one or more objects (called "sources") into a target object. It combines the properties of the source objects into the target object.
*/
let obj1 = { 1: "a", 2: "b" };
let obj2 = { 3: "c", 4: "d" };

let obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

// Using spread
let obj4 = { ...obj1, ...obj2 };
console.log(obj4);

let userDetails = {
  email: "user@email.com",
  id: "123abc",
  username: "user123abc",
};
// Returns the array
console.log(Object.keys(userDetails));
console.log(Object.values(userDetails));

console.log(Object.entries(userDetails)); // It will return the array of arrays, in which first will be the key and second will be the value of that key.

/* Note: Suppose we have to check if the object has a particular property or not then we use 'hasOwnProperty' to check, it return the boolean value if present then true otherwise false.

Determines whether an object has a property with the specified name.
Remember its case sensitive.
*/

// Example
let objProp = {
  locationIs: "Jalgaon",
  activeStatus: false,
  lastLoggedIn: ["Monday", "Tuesday"],
};
console.log(objProp);
console.log(objProp.hasOwnProperty("activeStatus")); // Output: true
