let marvelHeroes = ["ironman", "spiderman", "thor"];
let dcHeroes = ["superman", "batman", "flash"];

// As this is not suggest to concat and to access them.
// console.log(marvelHeroes.push(dcHeroes));
// console.log(marvelHeroes[3][0]);

/* Using concat method
But here is drawback that we can only concat two.
*/
let allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);

/* Using spread Operator
By using spread we can add multiple array & elements
*/
let spreadHeroes = [...marvelHeroes, ...dcHeroes, "Mohit"];
console.log(spreadHeroes);

//.flat() Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedArray = [1, 2, 3, [4, 5], 7, 8, [1, 4, 9, [10, 11]], 100];
let allSingleArray = nestedArray.flat(Infinity);
console.log(allSingleArray);
// Output: [1, 2, 3, 4, 5, 7, 8, 1, 4, 9, 10, 11, 100];

let str = "Mohit";
// returns the boolean value. If its array return true, if not then return false.
console.log(Array.isArray(str));

// Converts into array
console.log(Array.from(str));

// Returns a new array from a set of elements.
let score1 = 10;
let score2 = 20;
let score3 = 30;
let allScore = Array.of(score1, score2, score3);
console.log(allScore);
