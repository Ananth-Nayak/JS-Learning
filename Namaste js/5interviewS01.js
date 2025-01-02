// closure work with parameter, variables(var,let,const) defined later and scope chain
// example

function x(){
  var c = 5;
  function y(b){
    function inner(){
      console.log(a, b,c)
    }
    let a = 10;  //it still forms closure with inner even though defined later
    return inner;
  }
  return y;
}

let a = 100    //if the functions do not have any a, then this a is printed
// let result = x() //since x returns y fn, now result is y function
// let result1 = result("Namaste JS")         
// //calling y fn with parameter and it returns inner fn
// result1();

//above is same as
let result = x()('Namaste JS');
result();