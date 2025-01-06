function Person(fName, lName){
  this.fName = fName;
  this.lName = lName;
}

const person1 = new Person("Bruce","Wayne");

// person1.getFullName = function (){
//   return `${this.fName} ${this.lName}.`
// }

// console.log(person1.getFullName());
// console.log(person1)

// if we create a new instance of Person() function, it will not have getFullName() method
// because we added that method to person1 only

const person2 = new Person("Iron","Man");
// console.log(person2.getFullName())  // error

// if we want to add getFullName or any method whenever the new instance of Person() is created then we use prototype
// we add prototype to the person function so that method will be available to all the instances of person()

Person.prototype.getFullName = function (){
  return `${this.fName} ${this.lName}.`
}


console.log(person1.getFullName());
console.log(person2.getFullName());
