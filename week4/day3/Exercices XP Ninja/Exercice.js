class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super(); // Calls the parent (Bird) constructor
  }
}

const pet = new Flamingo();
/* output 
I'm pink. 🌸
I'm a bird. 🦢


Flamingo extends Bird, so it inherits from Bird.

In the Flamingo constructor, console.log("I'm pink. 🌸") is executed first.

Then super() is called, which runs the Bird constructor and prints "I'm a bird. 🦢"
 */