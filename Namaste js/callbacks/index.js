// callback fn example

function x(y){
  console.log("X");
  y();
}

x(function y(){
  console.log("Y")
})  // we are calling x fn with callback fn y

// callback fn, eventListener, closure
function attachEventListener(){
let count = 0;
document.getElementById('btn').addEventListener('click',function xyz(){
  console.log(`Button clicked ${++count}`);
})
}

attachEventListener();

// we put event listener and variable count inside function to hide the data
// callback fn also closure with its envoirnments
//fn xyz does not have count variable but it can still access it due to closure
//this how it will help us to hide the data 

// eventlistner click will be waiting us to click the button whole time
// even if it is not in use eventlistener could take the memory 
// so it is better to remove event listener when it does not require