const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};
let sentence = "";

for (let member in details) {
  sentence += member + " " + details[member] + " ";
}

console.log(sentence.trim());

