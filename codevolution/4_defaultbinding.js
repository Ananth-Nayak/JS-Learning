// 4. Default binding

// when any other binding method rule does not match it will be default binding
// in default binding this keyword is refering to global object, if there is not any globalobject then it will be undefined
"use strict"
globalThis.name = "Suresh";
function sayMyName(){
  let name = "Mahesh";
  console.log(`Your name is ${this.name}.`)
}

sayMyName(); 
// output is still suresh even if the function have local variable named 'name'

//summary
//  in default binding 'this' is refered to global object | in strict mode 'this' will be undefined

// Order of precedence if multiple binding can be done

// 1. new binding
// 2. explicit binding
// 3. implicit binding
// 4. default binding