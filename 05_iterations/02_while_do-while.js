/* while Loop
Condition First: The while loop checks the condition before executing the code block. If the condition is true, the loop body runs; if the condition is false from the start, the loop body will not execute even once.
*/
let i = 1;
while (i <= 10) {
  console.log(`Value of i is ${i}`);
  i = i * 2;
}

let heroesArr = ["superman", "batman", "spiderman"];

let list = 0;
while (list < heroesArr.length) {
  console.log(heroesArr[list]);
  list = list + 1;
}

/* do...while Loop
Code First, Condition Later: The do...while loop executes the code block first and then checks the condition. This means that the loop body will always execute at least once, regardless of whether the condition is true or false initially.
*/
let score = 11;
do {
  // here even score is 11 it will print at least once
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
