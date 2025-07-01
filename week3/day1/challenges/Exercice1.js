// Example sentence
let sentence = "The movie is not that bad, I like it";

// Find index of "not"
let wordNot = sentence.indexOf("not");

// Find index of "bad"
let wordBad = sentence.indexOf("bad");

// Check if "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  // Replace from "not" to "bad" (inclusive) with "good"
  let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(newSentence);
} else {
  // Otherwise, print original sentence
  console.log(sentence);
}
