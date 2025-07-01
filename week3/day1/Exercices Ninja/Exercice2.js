function findAvg(gradesList) {
  let sum = 0;
  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }
  let average = sum / gradesList.length;
  console.log("Average grade:", average);

  if (average > 65) {
    console.log("Congratulations! You passed!");
  } else {
    console.log("Sorry, you failed and must repeat the course.");
  }
}

// Example usage
findAvg([70, 80, 90]);
