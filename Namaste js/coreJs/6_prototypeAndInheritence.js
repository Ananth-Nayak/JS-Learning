// when we create objects, array or functions js attaches prototype (which is also a object) to it
// from that we can use built in methods and properties for that object/fn/array using dot notation
// we can see that using obj.__proto__

let obj = {
  name:"Ananth",
}

// console.log(obj.__proto__)

let obj1 = {
  name:"mahendra",
  city:"Ranchi",
  details: function(){
    console.log(`${this.name} from ${this.city}.`)
  }
};

let obj2 = {
  name:"Vikas",
};


// never do this
obj2.__proto__ = obj1;

// now obj2 has obj1 properties and method as prototype attached to it
// therefor it can access method or properties from obj1
// when we try to acess from properties and method from obj2 it will first look for main obj2's properties but if it is'nt there then it will look in prototype

console.log(obj2);
console.log(obj2.__proto__);
console.log(obj2.name);
console.log(obj2.city);
obj2.details();


// when a object is inheriting properties from other properties it is called prototypal inheritence


Function.prototype.logGreet = function (){
  console.log("Greeting from new function prototype");
}
// now we can see log Greet method attached to any function we create

function test(){
  console.log("what could be the result");
}

test.logGreet();
