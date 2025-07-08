const mergeWords = (word) => {
  let sentence = word;

  const inner = (nextWord) => {
    if (nextWord === undefined) {
      return sentence;
    }
    sentence += ' ' + nextWord;
    return inner;
  };

  return inner;
};
console.log(mergeWords('There')('is')('no')('spoon.')()); 
// Output: "There is no spoon."
