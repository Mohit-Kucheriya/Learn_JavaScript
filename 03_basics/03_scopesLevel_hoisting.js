// Variables declare inside the block scope are accessible there only. Outside gives error.
function one() {
  const username = "Mohit";
  function two() {
    // Here we can access the outer parent scope variable and function but not vice versa.
    let age = 23;
    console.log(`Hey my name is ${username} i'm ${age} year old!`);
  }
  two();
}
one();

/*
Here come the hoisting into the picture as function declare normally are treated as function and whole code is stored during the memory phase.
But,
When we assign the function as expression i.e we stored them into the varaible they are treaded as variable. 
*/
// Its function statement or function declaration
function addOne(num) {
  return num + 1;
}
addOne(45);

// function expression, simply assigning the functiont to the variable.
const addTwo = function (num) {
  return num + 10;
};
addTwo(10);
