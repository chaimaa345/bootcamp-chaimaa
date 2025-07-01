const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

// 1. Console.log the number of floors in the building.
console.log("Number of floors:", building.numberOfFloors);

// 2. Console.log how many apartments are on the 1st and 3rd floors.
console.log("Apartments on 1st floor:", building.numberOfAptByFloor.firstFloor);
console.log("Apartments on 3rd floor:", building.numberOfAptByFloor.thirdFloor);

// 3. Console.log the name of the second tenant and number of rooms.
const secondTenant = building.nameOfTenants[1]; // Dan
const secondTenantRooms = building.numberOfRoomsAndRent.dan[0];
console.log(`${secondTenant} has ${secondTenantRooms} rooms.`);

// 4. Check if Sarah’s and David’s rent is more than Dan’s rent.
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
  console.log("Dan's rent has been updated to 1200.");
} else {
  console.log("No rent update needed.");
}


