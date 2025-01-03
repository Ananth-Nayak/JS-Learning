// function curring using bind

let multiply = function (x,y){
  console.log(x*y)
}


let multiplyByTwo = multiply.bind(this,2);
//the above code is similar like this
// function multiplyByTwo(x=2,y){
// console.log(x*2)
// }
// now we can use the multiplyByTwo to multiply any number with 2
multiplyByTwo(3)

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(4)



// Currying is a technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument and returning another function until all arguments are provided.



// below are experimental not good practice
let multiplyByFour = multiply.bind(this,4,2)
multiplyByFour(6) // since we have passed already 4 and 2 in bind method output is 8 reagardless of the argument value here
multiplyByFour(undefined) // still output is 8

let multiplyByFive = multiply.bind(this)
multiplyByFive(5,2) // output is 10 but this is similar to multiply fn defined in the beginning
multiplyByFive(6,2) // output is 12
