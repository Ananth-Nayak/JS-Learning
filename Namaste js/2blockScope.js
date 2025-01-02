// block scope
// var a = 200;
// let b = 500;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(a)  // output is 10
//the a inside function is shadowing the outside a
// the both a is referencing to the same memory loacation (only for var and name should be same)

// console.log(b) //output is 500
//b inside block allocated memory inside that block storage and avaialble inside block only
//b outside block is also get seperate storage other than block and global

// {
//   let c = 200;
//   console.log(b)
// }

// {
//   const b = 7;
//   {
//     const b = 21;
//     console.log(b);
//   }
//   console.log(b);
// }
