const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

// Part I
function getCarHonda(carInventory) {
  const hondaCar = carInventory.find(car => car.car_make === "Honda");
  return hondaCar
    ? `This is a ${hondaCar.car_make} ${hondaCar.car_model} from ${hondaCar.car_year}`
    : "No Honda found in inventory.";
}

// Part II
function sortCarInventoryByYear(carInventory) {
  return carInventory.sort((a, b) => a.car_year - b.car_year);
}

// Test the functions
console.log(getCarHonda(inventory));
console.log(sortCarInventoryByYear(inventory));
