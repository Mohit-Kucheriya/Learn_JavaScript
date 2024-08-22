let firstName = "Mohit";
let secondName = "Kucheriya";

// outdated syntax
console.log("Hello my name is" + " " + firstName + " " + secondName + ".");

// Modern syntax using template literal
console.log(`Helloo my name is ${firstName} ${secondName}`);

// Another way to declare string
const newStr = new String("HarryPotter");
console.log(newStr);
console.log(newStr[0]);
console.log(newStr.__proto__);
console.log(newStr.toUpperCase());
console.log(newStr.charAt(2));

// The search is case-sensitive.
console.log(newStr.indexOf("h")); // Output is -1, gives the first occurrence

// Here remember primitive dataTypes are placed in the stack and the copy is given changes are made in the copy, original is as it is

/*
Remember when we declare string with (new String) in return it gives a object in key:value pair.

// String {'HarryPotter'}
0:  "H"
1:  "a"
2:  "r"
3:  "r"
4:  "y"
5:  "P"
6:  "o"
7:  "t"
8:  "t"
9:  "e"
10: "r"

 length: 11
 [[Prototype]]: String
 [[PrimitiveValue]]: "HarryPotter"

 typeof newStr
 'object'
*/

// substring Method(startIndex, endIndex)
// Here 'end' value is excluded i.e value will be extract from 0 to 3 only
let subNewStr = newStr.substring(0, 4);
console.log(subNewStr);

// trim()
let trimStr = "    Ron    ";
console.log(trimStr);
console.log(trimStr.trim());

// replace()
let url = "https://mohit%20javascript.com";
console.log(url.replace("%20", "-"));

// includes() returns the boolean output
let newInclude = "MohitKucheriya";
console.log(newInclude.toLocaleLowerCase().includes("mohit"));

// other method
let splitName = "Mohit Kucheriya Software Engineer"
let splitValue = splitName.split(" ")
console.log(splitValue);

let charatName = "Ruchita";
console.log(charatName.charAt(-1));

/*
let str = "Harrypotter";

// Negative index
console.log(str.charAt(-1)); // Outputs: ""

// Index greater than string length
console.log(str.charAt(100)); // Outputs: ""

In both cases, charAt handles the situation gracefully by returning an empty string instead of throwing an error.
*/
