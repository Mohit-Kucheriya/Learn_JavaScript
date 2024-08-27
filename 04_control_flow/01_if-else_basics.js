/* if-else
Syntax: if(condition){}
Note: if condition is true then only if block will get execute, ortherwise else block will get execute.
*/

const temperature = 41;

if (temperature <= 45) {
  console.log(`Tempearture is less than 45deg i.e ${temperature}`);
} else {
  console.log(`Tempearture is greater than 45deg i.e ${temperature}`);
}

// Variable declared inside '{}' are accessible only inside that '{}' using outside gives Error.
const score = 200;

if (score > 100) {
  const getFreehitPoints = 5;
  console.log(
    `If score id greater than 100, USer get '+${getFreehitPoints}' points i.e here score is ${score}`
  );
}

// Here we get the ReferenceError: getFreehitPoints is not defined
// console.log(
//     `If score id greater than 100, USer get '+${getFreehitPoints}' points i.e here score is ${score}`
//   );

const balance = 1000;

if (balance < 500) {
  console.log(`Balance is less than 500 i.e current ${balance}`);
} else if (balance < 750) {
  console.log(`Balance is less than 700 i.e current ${balance}`);
} else if (balance < 900) {
  console.log(`Balance is less than 900 i.e current ${balance}`);
} else {
  console.log(`Balance is less than 1200 i.e current ${balance}`);
}

// If we want to check multiple condition.
// '&&' checks if both condition is true then only final result is true.
let userLoggedIn = true;
let courseCompletion = false;

if (userLoggedIn && courseCompletion) {
  console.log(`User get the completion Certificate`);
}

// '||' checks if one condition is true the final result is true
let loggedInFromGoogle = true;
let loggedInFromGithub = false;

if (loggedInFromGithub || loggedInFromGoogle) {
  console.log(`User Logged-in`);
}
