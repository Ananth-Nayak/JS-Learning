// as we discussed in last chapter, other languages use class based inheritance
// where as JS uses prototypal based inheritance
// class does not introduce a new object oriented model it just based on the protypal inheritance
// class is syntactical sugar over the exisisting prototypal inheritance that means it is much readable than typical prototypal inheritance but the underlying cocept is same

class Person{
  constructor(fName,lName){
    this.fName = fName;
    this.lName = lName;
  }
  getFullName(){
    return `${this.fName} ${this.lName}`
  }
}

const p1 = new Person("Donald","Trump");
console.log(p1.getFullName());

class SuperHero extends Person {
  constructor(fName,lName){
    super(fName,lName)    
    // calling parent constructor here Person
    // and no we are able to access the parent's properties and method
    this.isSuperHero = true;
  }
  fightCrime(){
    return 'Fighting Crime';
  }
}

const spiderMan = new SuperHero("Peter","Parker");
console.log(spiderMan);
console.log(spiderMan.getFullName());
console.log(spiderMan.isSuperHero);
console.log(spiderMan.fightCrime());

// the above code is same as the previous one but this code is much redable and understandable