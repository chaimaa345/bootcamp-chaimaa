function search_word(sentence, word) {
  // Use a regular expression with 'g' flag for global match and 'i' for case-insensitive
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matches = sentence.match(regex);
  const count = matches ? matches.length : 0;
  return `'${word}' was found ${count} times.`;
}
console.log(search_word('The quick brown fox', 'fox')); 