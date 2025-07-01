const family = {
  father: "John",
  mother: "Anna",
  daughter: "Lily",
  son: "Max"
};
console.log("Family members (keys):");
for (let member in family) {
  console.log(member); // Logs: father, mother, daughter, son
}
console.log("Family names (values):");
for (let member in family) {
  console.log(family[member]); // Logs: John, Anna, Lily, Max
}


