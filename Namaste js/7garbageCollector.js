// normally unused variable collected by js engines and freezes its memory
// but variables which are in closure cannot be garbage collected and this is one of disadvantges of closure
//but nowdays engines are smartly collect the garbage even if it is in closure with others
//garbage collections happens in browser engines only not in node

function x(){
  var a=10,b=20;
  return function output(){
    console.log(a);
  }
}

let res = x()
res();
console.log(a)