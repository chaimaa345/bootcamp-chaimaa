const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

// 1. Welcome messages
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log("Welcome Students:");
console.log(welcomeStudents);

// 2. Only Full Stack Residents
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log("Full Stack Residents:");
console.log(fullStackResidents);

// 3. Bonus: Last names of Full Stack Residents
const lastNamesOfFSR = users
  .filter(user => user.role === 'Full Stack Resident')
  .map(user => user.lastName);
console.log("Last Names of Full Stack Residents:");
console.log(lastNamesOfFSR);
