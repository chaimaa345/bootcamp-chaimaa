class Dog {
  constructor(name) {
    this.name = name;
  }
}
//Correct Answer: Option 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);      // ✅ correctly calls parent constructor
    this.size = size; // ✅ sets additional property
  }
}
//Uses super(name) to call the parent (Dog) constructor.

//this.size is defined after calling super.
/* Option 1 – Missing super()

class Labrador extends Dog {
  constructor(name, size) {
    this.size = size; //  Error: Must call super() before using 'this'
  }
}
 JavaScript requires calling super() before using this in a subclass constructor.

 Option 3 – name is undefined


class Labrador extends Dog {
  constructor(size) {
    super(name);     //  Error: 'name' is not defined
    this.size = size;
  }
}
name is not passed or declared. This throws a ReferenceError.

 Option 4 – Missing super()
js
Copier
Modifier
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name; //  Cannot use 'this' before calling 'super'
    this.size = size;
  }
}
 Again, super() must be called before using this in subclass constructors. */