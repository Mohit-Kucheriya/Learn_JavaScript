const myObj = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(myObj);

const newObject = {
  name: "Mohit Kucheriya",
  isLoggedIn: true,
  activeStatus: ["Monday", "Saturday"],
};

console.log(Object.getOwnPropertyDescriptor(newObject, "name"));
