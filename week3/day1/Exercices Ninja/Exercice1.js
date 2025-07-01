// Define first person object
let person1 = {
  fullName: "John Doe",
  mass: 80, // kg
  height: 1.8, // meters
  calcBMI: function() {
    return this.mass / (this.height * this.height);
  }
};

// Define second person object
let person2 = {
  fullName: "Jane Smith",
  mass: 65,
  height: 1.7,
  calcBMI: function() {
    return this.mass / (this.height * this.height);
  }
};

// Function to compare BMIs
function compareBMI(personA, personB) {
  let bmiA = personA.calcBMI();
  let bmiB = personB.calcBMI();

  if (bmiA > bmiB) {
    console.log(`${personA.fullName} has the highest BMI (${bmiA.toFixed(2)})`);
  } else if (bmiB > bmiA) {
    console.log(`${personB.fullName} has the highest BMI (${bmiB.toFixed(2)})`);
  } else {
    console.log(`Both have the same BMI (${bmiA.toFixed(2)})`);
  }
}

compareBMI(person1, person2);
