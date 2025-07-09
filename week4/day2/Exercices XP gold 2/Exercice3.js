const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function cleanArray(arr) {
  return arr.filter(value => {
    return value !== null && 
           value !== 0 && 
           value !== '' && 
           value !== false && 
           value !== undefined && 
           !Number.isNaN(value);
  });
}

console.log(cleanArray(sampleArray));
// Output: [15, -22, 47]
