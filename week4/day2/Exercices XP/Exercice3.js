// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
//The ... is the spread operator. It spreads out elements of an array into another array.
const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log("------1------");
console.log(result); 
// Output: [ 'bread', 'carrot', 'potato', 'chicken', 'apple', 'orange' ]

// ------2------
const country = "USA";
console.log("------2------");
console.log([...country]); 
//A string is iterable, so spreading it turns it into an array of characters.
//"USA" becomes ['U', 'S', 'A']
// Output: [ 'U', 'S', 'A' ]

// ------Bonus------
let newArray = [...[,,]];
console.log("------Bonus------");
console.log(newArray); 
//[,,] is an array with two empty slots
//So newArray becomes [undefined, undefined], but not actually assigned values it's an array with 2 empty slots, not two undefined values.
// Output: [ <2 empty items> ]
