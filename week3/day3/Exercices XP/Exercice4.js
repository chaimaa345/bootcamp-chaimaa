function hotelCost(nights) {
  const costPerNight = 140;
  return nights * costPerNight;
}

function planeRideCost(destination) {
  destination = destination.toLowerCase();
  if (destination === "london") {
    return 183;
  } else if (destination === "paris") {
    return 220;
  } else {
    return 300;
  }
}

function rentalCarCost(days) {
  const costPerDay = 40;
  let total = days * costPerDay;
  if (days > 10) {
    total *= 0.95; // 5% discount
  }
  return total;
}

function totalVacationCost() {
  let nights;
  do {
    nights = prompt("How many nights would you like to stay in the hotel?");
  } while (isNaN(nights) || nights === "" || nights === null);
  nights = Number(nights);

  let destination;
  do {
    destination = prompt("What is your destination?");
  } while (!isNaN(destination) || destination === "" || destination === null);

  let days;
  do {
    days = prompt("How many days would you like to rent the car?");
  } while (isNaN(days) || days === "" || days === null);
  days = Number(days);

  const hotelPrice = hotelCost(nights);
  const planePrice = planeRideCost(destination);
  const carPrice = rentalCarCost(days);

  console.log(`The car cost: $${carPrice}, the hotel cost: $${hotelPrice}, the plane tickets cost: $${planePrice}.`);
  console.log(`Total vacation cost: $${hotelPrice + planePrice + carPrice}`);
}

// Call the function
totalVacationCost();
