// A wrapper function in JavaScript is a function that “wraps” another function or logic, providing additional functionality or modifying its behavior.
// wrapper function is also a function which takes the function and we can modify, enhance it's operation, or we can check the args of a that function, we can do lot of things before and after the function

function add(a, b) {
  return a + b;
}

function logWrapper(func) {
  return function (...args) {
    console.log(`Calling ${func.name} with arguments:`, args);
    const result = func(...args);
    console.log(`Result: ${result}`);
    return result;
  };
}

const wrappedAdd = logWrapper(add);
wrappedAdd(5, 3);
// Output:
// Calling add with arguments: [5, 3]
// Result: 8

// logWrapper wraps the add function to add logging before and after its execution.
// we could have done this even inside the add function but if we want to do the same thing for other function then we would have to re write the code again and again

// wrapper for error handling

function riskyFunction() {
  throw new Error("Something went wrong!");
}

function safeWrapper(func) {
  return function (...args) {
    try {
      return func(...args);
    } catch (error) {
      console.error("Error caught:", error.message);
      return null;
    }
  };
}

const safeFunction = safeWrapper(riskyFunction);
safeFunction();
// Output:
// Error caught: Something went wrong!

// The wrapper ensures that any errors in the original function are caught and handled gracefully.
// agian with the wrapper function we can handle error on any function that we sends to wrapper function.

// when we use wrapper functions
// 1. when we want to Add functionality to existing functions.
// 2. Avoiding repitition
// If you want to add the same behavior to multiple functions (e.g., logging, error handling), writing it directly inside each function leads to repetitive code. Wrapper functions avoid this repetition.

// function asyncHnadler(anyFunction){
//   return function (arguments){
//     try{
//       console.log("Hi");
//     }
//     catch(error){
//       console.log(error)
//     }
//   }
// }

// above code same as this

const asyncHandler = (anyFunction) => (arguments) => {
  try {
    anyFunction(arguments);
  } catch (error) {
    console.log(error);
  }
};

const saveDetailsInDb = asyncHandler(dbSavingFunction);

// here asynchandler is a function that takes any function as parameter, which returns a function that handles the error using try and catch method to anyFunction that we send to it
// whenever saveDetailsinDb gets called with arguments it handles dbsavingfunction with those arguments passed
