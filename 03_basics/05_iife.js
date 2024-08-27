/*Immediately Invoked Function Expression (IIFE) 
(): first bracket is for function definition
(): second bracket is for function calling.

(function() {
    console.log("Hello from IIFE");
})()   // No semicolon

(function() {
    console.log("Another IIFE");
})()

Without the semicolon, the JavaScript interpreter might think that the second IIFE is an argument to the first one, leading to a syntax error or unexpected behavior.
*/


// Named iife
(function iifeFunc() {
  console.log("DB Connected");
})();


// Nameless iife: Using arrow function
((name) => {
  console.log(`Hey ${name}`);
})("Mohit");
