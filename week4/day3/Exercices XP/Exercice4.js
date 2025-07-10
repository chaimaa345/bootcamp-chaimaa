class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
/* What happens in the code?
A class Person is defined
The class has a constructor method that accepts a name and assigns it to this.name.
A new object member is created using new Person('John').
typeof member is logged to the console.

What does typeof member return?
member is an object created from the Person class.
Even though it's made from a class, JavaScript treats all instances of classes as objects.
Output:object */