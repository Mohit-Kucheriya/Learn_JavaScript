// // To get access of variables, we need to know the scope of that variable.
// if (true) {
//   let a = 10;
//   const b = 100;
//   var c = 1000;
// }

// console.log(a) // Error 'a is not defined' because a is declared with let &  let have the block scope
// console.log(b) // same with const
// console.log(c) // Output: 1000, as var is global scope it gets attcahed to the global object in case of browser its window object.

let a = 300;
if (true) {
  let a = 30;
  const b = 3;
  console.log(a); // Output: 30, here scope is block scope.
}
console.log(a); // Output: 300, because here scope of let is script scope
