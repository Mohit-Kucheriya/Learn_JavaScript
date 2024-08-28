/*
The forEach method in JavaScript is a convenient way to iterate over the elements of an array. It allows you to execute a provided function once for each array element in order, without returning any value (i.e., it always returns undefined).
*/

// Note:take three parameter, forEach(callbackFn,index,array)
const myArray = ["JS", "C++", "Java", "Python"];
// 1st way
myArray.forEach((element) => {
  console.log(element);
});

myArray.forEach(function (item, index) {
  console.log(`${index}: ${item}`);
});

// 2nd way
function prinItem(item) {
  console.log(item);
}
myArray.forEach(prinItem);

myArray.forEach((item, index, myArray) => {
  console.log(item, index, myArray);
});

const myCodingLanguage = [
  { languageName: "JavaScript", fileName: "js" },
  { languageName: "HTML", fileName: "html" },
  { languageName: "Java", fileName: "java" },
  { languageName: "Python", fileName: "py" },
  { languageName: "Cascading StyleSheet", fileName: "css" },
];

myCodingLanguage.forEach((language) => {
  console.log(language);
  console.log(language.languageName);
  console.log(language.fileName);
});
