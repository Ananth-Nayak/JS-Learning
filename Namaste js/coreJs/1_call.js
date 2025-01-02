// // CALL METHOD

// let name1 = {
//   firstName:"Ananth",
//   lastName:"Nayak",
//   printFullName:function (city) {
//     console.log(`${this.firstName} ${this.lastName} from ${city}`)
//   }
// }

// name1.printFullName('Mumbai')

// let name2 = {
//   firstName:'Naveen',
//   lastName:'Sharma',
// }
// // if we want to share the printfullname of name1 with name2 we use 'CALL' method of js
// // for which we call 'FUNCTION BORROWING'

// name1.printFullName.call(name2,'Delhi')
// //first argument should be always what 'this' is referencing to (here it refering to name2)
// //remaining arguments are parameter to functions if any
// //call method invokes automatically

// // generally this is not good practice that defining common function in object
// // since fullname fn can be shared with multiple object, we define outside

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

printFullName.call(name3,"Bangalore","Karnataka");
printFullName.call(name4,'Mumbai','Maharastra');

// we are calling printFullName function with 'this' keyword is referencing to name3 and name4
