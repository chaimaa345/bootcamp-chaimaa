// Part 1: Equality checks
/*console.log([2] === [2]); false Arrays are reference types.
Two separate arrays, even with the same values, are not the same in memory.*/
/*console.log({} === {}); false Objects are compared by reference, not by structure*/

// Part 2: Object references
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5 };

object1.number = 4;

console.log(object2.number); /* 4  because object1, object2, and object3 all reference 
the same object in memory.So when you update object1.number = 4, 
it affects object2 and object3 */
console.log(object3.number); // 4
console.log(object4.number); // 5 object4 is a new object, even though it has the same value initially

// Part 3: Classes
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(sound) {
    return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));
