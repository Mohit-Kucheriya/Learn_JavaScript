// map: Similar to forEach, but it returns the array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newMyNums = myNums.map((num) => num + 10);
console.log(newMyNums);

// Same using forEach
const pushNewNum = [];
myNums.forEach((num) => {
  pushNewNum.push(num + 10);
});
console.log(pushNewNum);

// Method Chaining
//  The intermediate results of each method in the chain are typically passed directly to the next method in the sequence, rather than being stored separately.

const chainNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 50);
console.log(chainNums)