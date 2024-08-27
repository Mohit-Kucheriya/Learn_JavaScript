// // for loop
// for (let i = 0; i < 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log(`Square of ${element} is ${element * element}`);
//   }
//   console.log(element);
// }

// // Nested for-loop
// // Multiplication table 1-10
// for (let x = 1; x <= 10; x++) {
//   for (let y = 1; y <= 10; y++) {
//     console.log(`${x} X ${y} = ${x * y}`);
//   }
// }

// // for loop on array
// const myArray = ["flash", "spiderman", "superman"];

// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

// // Using 'break' & 'continue' keyword

// // break
// for (let b = 1; b <= 15; b++) {
//   // The break keyword in JavaScript is used to exit a loop or switch statement immediately. When the break statement is encountered, the control flow jumps out of the loop or switch block, skipping any remaining iterations or cases.
//   if (b == 5) {
//     console.log(`Detected value ${b}`); //Exit the loop when b equals 5
//     break;
//   }
//   console.log(`Value of b is ${b}`);
// }

// continue
for (let c = 0; c <= 10; c++) {
  if (c % 2 == 0) {
    continue;
  }
  
}
// The continue keyword in JavaScript is used within loops to skip the current iteration and proceed with the next iteration of the loop. Unlike break, which exits the loop entirely, continue stops the current iteration and moves on to the next one.
