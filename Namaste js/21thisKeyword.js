"use strict"
function printer(){
  console.log(this);
}

printer() //value of this will be global(window) object inside print function, non-strict mode
//in non strict mode, initially this value will be undefined but it is substituted by global object
//in strict mode, 'this' will be undefined
//this value depends on how this keyword is called
//if we called using reference in strict mode 'this' will be global object
// window.printer();

let obj = {
  name:"Ananth",
  print:function(){
    console.log(this);  //this referes to the object
    console.log(this.name); //"Ananth"
  },
}

obj.print();


let obj1 = {
  name:"chitra",
  print:() => {
    console.log(this)
  }
}

obj1.print()  
// incase of arrow function, this keyword is retaining its enclosed lexical context i.e. where it is declared

let obj3 = {
  name:"chitra2",
  x:()=>{
    const y = ()=>{
      console.log(this);
    }
    y();
  }
}

obj3.x(); 
//here 'this' will be obj3, bcz the fn y's enclosed lexical context(x()) is obj3
// inside DOM, this will be the element name