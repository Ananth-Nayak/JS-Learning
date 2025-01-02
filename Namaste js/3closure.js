function x(){
  let num = 20;
  function y(){
    console.log(num)
  }
  return y;
}

let z = x();

z(); //output in console is 20

// we invoked x fn and returned value is assigned to z variable and z variable will have now y function

// according to execution context, after calling/invoking the function, the function execution context will be deleted that means variable created inside function no longer available outside

// but when we invoke the z fn it will print 20 in console, even though num variable inside x fn which does not have any memory at the time of invoking x

// this is because closure, closure means function remembers its function and its lexical envoirnment even after we passed the function outside of its scope.

// thats why when we call z which calls y function, though the num variable is declared in x and x function memory is deleted after invoking, the z can still get to print num in x