// 3. New binding

// New Binding determines the value of this when a function is invoked as a constructor function using the new keyword.

// When you use the new keyword to call a function, this inside the function refers to the new object created by new.

function Person(name,age){
  this.name = name
  this.age = age
  this.greet = function (){
    console.log(`Hi!!, I'm ${this.name}, and I'm ${this.age} years old`);
  }
}

const person1 = new Person("Ambani",70);
const person2 = new Person("Adani",58);

person1.greet();
person2.greet();

// new Person() creates a new object {}.
// Inside Person, 'this' refers to this new object(p1 and p2).
// this.name = name adds the property name to the object. 
// this.age = age adds the property age to the object.
// this.greet assigns a method to the object.
// The new object is returned as p1 or p2.

// summary
// when we call the function with constructor, then at first it creates a empty object and in that object the this keyword is refered to that object, and other properties are added to that object
