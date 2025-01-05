// the js keyword 'THIS' which is used in a function, refers to the object it belongs to.
// it makes function reusable by letting you decide the object value
// 'THIS' value is determined by how a function is called




// How to determine "THIS" ?
// There are 4 ways to invoke a function and determine the value of "THIS" keyword

// 1. Implicit Binding
// When a function is called as a method of an object, 'THIS' inside the function automatically points to the object that is calling the function.
// Look to the left of the dot (.) at the time the function is called. Whatever is to the left of the dot is what this will refer to

// "use strict"

const person = {
  // name: "Alice",
  sayHello: function () {
      console.log(`Hello, my name is ${this.name}`);
  }
};

person.sayHello(); // "Hello, my name is Alice"
// The function sayHello is called with person.sayHello().
//  To the left of the dot: person.
// So, this inside sayHello refers to the person object.




// Edge Case: Nested Function

// Implicit binding only applies to the immediate function being called. Nested functions don’t inherit this automatically.

globalThis.brand = "Volvo" // in node gobalThis is a global object
const car = {
  brand: "Tesla",
  showBrand: function () {
      function inner() {
          console.log(this.brand); // `this` is undefined (strict mode) or global object
      }
      inner();
  }
};

car.showBrand(); 

// if there is no object to the left

function show() {
  console.log(this);
}

show(); // In strict mode: undefined | In non-strict mode: global object

// Summary

// if a function/method invoked using dot notation (as a object method), then the "THIS" keyword is refering to that object
// if the function is nested (i.e. function inside method of an object) then 'THIS' is refering to global object, but in strict mode the value of 'THIS' in this case will be 'undefined'
// similarly if a function is invoked without object, "THIS" behaves same as nested function invoke