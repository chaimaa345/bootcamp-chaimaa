const people = ["Greg", "Mary", "Devon", "James"];
people.shift(); // Removes the first element
console.log(people);
people[people.indexOf("James")] = "Jason";
console.log(people);
people.push("chaimaa");
console.log(people);
console.log(people.indexOf("Mary")); // 0
const peopleCopy = people.slice(1, people.length - 1);
console.log(peopleCopy); // ["Devon", "Jason"]
//Because "Foo" is not in the array, so indexOf() returns -1
console.log(people.indexOf("Foo")); // -1
const last = people[people.length - 1];
console.log(last); 
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
console.log(people);
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}






