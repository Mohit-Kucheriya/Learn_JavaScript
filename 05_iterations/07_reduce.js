// /* reduce
// Note: reduce take two arguments 1st is accumulator i.e initial value & 2nd currentValue from array, returns the single output based on condition.
// whaterver result comes from the satisfying condition gets store in the acc.
// */

// const myPrice = [100, 120, 150];

// const totalPrice = myPrice.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} & currVal: ${currval}`);
//   return acc + currval;
// }, 0);

// console.log(totalPrice);

const shoppingCart = [
  {
    courseName: "JS Mastery",
    price: 1999,
  },
  {
    courseName: "Web Development",
    price: 3999,
  },
  {
    courseName: "DSA to Development",
    price: 10999,
  },
  {
    courseName: "Frontend Domination",
    price: 4999,
  },
  {
    courseName: "Backend Domination",
    price: 5999,
  },
];

let totalCoursePrice = shoppingCart.reduce((acc, currnVal) => {
  console.log(currnVal);
  return acc + currnVal.price;
}, 0);
console.log(totalCoursePrice);
