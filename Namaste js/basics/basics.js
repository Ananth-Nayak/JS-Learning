// var x;
// var inside;

// function a(){
//   x = 100;
//   inside = this
// }
// console.log(x);
// a()
// var outside = this
// console.log(inside === outside)





var a = 200;
function test(){
  var a = 500;
  console.log(this.a);
  console.log(a);
}
console.log(a)

test();

console.log(a)