function kgToGrams(weight) {
  return weight * 1000;
}

console.log(kgToGrams(2)); 
// 2000
const kgToGramsExpr = function(weight) {
  return weight * 1000;
};

console.log(kgToGramsExpr(3)); 
// 3000

// Function declaration is hoisted (can be called before it's defined), while function expression is not.
const kgToGramsArrow = weight => weight * 1000;

console.log(kgToGramsArrow(5)); 
// 4000
