 // Generate a random number between 1 and 100
  let randomNum = Math.floor(Math.random() * 100) + 1;
  console.log("Random Number:", randomNum);

  // Loop and print even numbers from 0 to randomNum
  for (let i = 0; i <= randomNum; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }