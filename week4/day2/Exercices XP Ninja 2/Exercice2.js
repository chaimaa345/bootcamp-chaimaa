function string_chop(str, size) {
  const result = [];

  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}
console.log(string_chop('developers',2)); 