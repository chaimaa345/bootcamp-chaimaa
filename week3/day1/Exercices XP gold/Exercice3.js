let age = [20, 5, 12, 43, 98, 55];

// 1️⃣ Sum of all ages
let sum = 0;
for (let i = 0; i < age.length; i++) {
  sum += age[i];
}
console.log("Sum of ages:", sum);

// 2️⃣ Highest age
let max = age[0];
for (let i = 1; i < age.length; i++) {
  if (age[i] > max) {
    max = age[i];
  }
}
console.log("Highest age:", max);
