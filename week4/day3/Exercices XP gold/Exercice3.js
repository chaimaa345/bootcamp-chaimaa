class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter(); // counterOne.count = 0
counterOne.increment();           // counterOne.count = 1
counterOne.increment();           // counterOne.count = 2

const counterTwo = counterOne;    // counterTwo is a reference to the same object as counterOne
counterTwo.increment();           // counterOne.count = 3 (same object)

console.log(counterOne.count);    /* ?  output 3 because counterTwo = counterOne means both variables point to the same object in memory.

So calling counterTwo.increment() affects the same count property that counterOne uses.

They are not two different counters; they're two references to the same object.*/
