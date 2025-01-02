// APPLY METHOD

// similar to call method, but function parameters are passed as array elements while first argument is as same as call method, i.e. what this keyword is refering to

let name3 = {
  first:"Virat",
  last:"Kohli",
}

let name4 = {
  first:"Rohit",
  last:"Sharma",
}

let printFullName= function (city,state){
  console.log(`${this.first} ${this.last}, from city-${city} state-${state}`)
}

printFullName.apply(name3,["Bangalore","Karnataka"]);
printFullName.apply(name4,['Mumbai','Maharastra']);


// we are passing fn parameters as array where as in call method we seperate them with comma
