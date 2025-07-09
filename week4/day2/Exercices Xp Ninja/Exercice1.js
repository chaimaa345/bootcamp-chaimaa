const data = [
  { name: 'Butters', age: 3, type: 'dog' },
  { name: 'Cuty', age: 5, type: 'rabbit' },
  { name: 'Lizzy', age: 6, type: 'dog' },
  { name: 'Red', age: 1, type: 'cat' },
  { name: 'Joey', age: 3, type: 'dog' },
  { name: 'Rex', age: 10, type: 'dog' },
];

let sum = 0;

for (let animal of data) {
  if (animal.type === 'dog') {
    sum += animal.age * 7; // convert to human years
  }
}

console.log("Sum of dogs' ages in human years (loop):", sum);
//2 using reduce 
const totalDogHumanYears = data.reduce((acc, { type, age }) => {
  return type === 'dog' ? acc + age * 7 : acc;
}, 0);

console.log("Sum of dogs' ages in human years (reduce):", totalDogHumanYears);
