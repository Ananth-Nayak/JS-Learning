// 2. Explicit Binding
// Explicit Binding in JavaScript lets you manually set the value of the this keyword using functions like call(), apply(), or bind().
// With explicit binding, you decide what 'this' should refer to by "explicitly" passing the object you want as the 'this' value.

function greet(greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}

const person = { name: "Alice" };
greet.call(person, "Hello"); // "Hello, my name is Alice"

// we can also do this using other method like apply(), bind()

// Explicit Binding is Useful in also fixing the 'this' Context in Event Listeners Using bind() ensures 'this' refers to the correct object.

const button = {
  label: "Click Me",
  handleClick: function() {
      console.log(`Button: ${this.label}`);
  }
};

const buttonHandler = button.handleClick.bind(button);
document.querySelector("#myButton").addEventListener("click", buttonHandler);

// summary
// "Explicit means I’m in charge!"
// You explicitly decide what 'this' should be.