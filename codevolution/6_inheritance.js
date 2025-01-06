// in javascript concept of inheritance is supported through prototype and referred as prototypal inheritance
// unlike other languages which use classes for inheritance js use prototypal inheritance

function Person(fName,lName){
  this.fName = fName;
  this.lName =lName;
};

Person.prototype.getFullName = function (){
  return `${this.fName} ${this.lName}`
};
// for every instance of Person function will have getFullName method attached to it



function SuperHero(fName,lName){
  Person.call(this,fName,lName);
  this.isSuperHero = true;
}

SuperHero.prototype.fightCrime = function (){
  console.log('Fighting Crime');
};
// for every instance of Superhero function fightCrime metod attached to it

// creating instance of superHero
const batman = new SuperHero()

// but superhero now has only the quality(properties) of supehero but we want to also include the property of person to superhero
// that's why we use call method inside superhero to have properties of person in superhero
// but we cannot access the getFullName from person as it is inside protype of person we only called person function using call method till now

// now we use Object.create method to inherit getFullName method , as it will deligate to another object for failed lokup

SuperHero.prototype = Object.create(Person.prototype)
// that means if we could not find the method in the superhero prototype then it will look for person.prototype

// this is called prototypal inheritance in javascript