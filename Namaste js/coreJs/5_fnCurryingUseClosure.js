// function currying using closure method

let multiply = x => y => {
  console.log(x*y);
}


//the above code is same as
// let multiply = function (x) {
//   return function(y){
//     console.log(x*y)
//   }
// }

// multiply(5)(6)

let multiplyByTwo = multiply(2);

multiplyByTwo(5)  // output is 10


// Currying is a technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument and returning another function until all arguments are provided.