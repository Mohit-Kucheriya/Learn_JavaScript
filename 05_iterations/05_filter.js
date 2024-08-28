// filter: return array but only for true values, so we have to store them in new variable
const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Implicit return
const newMyNumber = myNumber.filter((num) => num > 5);
console.log(newMyNumber);

// Explicit return
const num1 = myNumber.filter((num) => {
  return num % 2 == 0;
});
console.log(num1);

// Example: 3
const newNumArr = [];

myNumber.forEach((num) => {
  if (num > 5) {
    newNumArr.push(num);
  }
});
console.log(newNumArr);

// Example: 4
const books = [
  {
    title: "To Kill a Mockingbird",
    year: 1960,
    edition: "1st",
    genre: "Fiction",
  },
  {
    title: "1984",
    year: 1949,
    edition: "1st",
    genre: "Dystopian",
  },
  {
    title: "The Great Gatsby",
    year: 1925,
    edition: "1st",
    genre: "Classic",
  },
  {
    title: "The Catcher in the Rye",
    year: 1951,
    edition: "1st",
    genre: "Fiction",
  },
  {
    title: "Pride and Prejudice",
    year: 1813,
    edition: "1st",
    genre: "Romance",
  },
  {
    title: "The Hobbit",
    year: 1937,
    edition: "1st",
    genre: "Fantasy",
  },
  {
    title: "Moby Dick",
    year: 1851,
    edition: "1st",
    genre: "Adventure",
  },
  {
    title: "War and Peace",
    year: 1869,
    edition: "1st",
    genre: "Historical Fiction",
  },
  {
    title: "The Odyssey",
    year: -800,
    edition: "1st",
    genre: "Epic",
  },
  {
    title: "Brave New World",
    year: 1932,
    edition: "1st",
    genre: "Dystopian",
  },
];

let filterBook = books.filter((book) => {
  return book.genre === "Fiction";
});
console.log(filterBook);

// Here we are checking if any one condition gets true, final output will be true and it will be return
filterBook = books.filter((book) => {
  return book.year >= 2000 || book.genre === "Dystopian";
});
console.log(filterBook);
