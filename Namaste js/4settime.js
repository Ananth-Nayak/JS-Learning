// // setTimeout(()=>console.log("first"),5000)
// // console.log("Second"); //second will print first, then first will print after 5 seconds


// // aim is to print 1 in 1 second, 2 in 2 seconds...till 5 in 5th second
// for(var i=1;i<=5;i++){
//   setTimeout(()=>console.log(i),i*1000);
// }

// // but it will print 6 every second till 5 second 
// //bcz, settimeout will executed in seperate and the setTimeout callback fn takes the referance of i not the value of i, at the time of setTimeout execution the i value will be 6 bcz main execution does not wait for settimeout

// //settimeout called 5 callback function in which i value is 6 at the time of execution
// //callback fn takes reference of i, when it is try to find i using i then its value is 6
// // but the timer(i*1000) takes copy of i value


// //we can solve in 2 ways
// //using let i, instead of var i, bcz let creates different instance of i every iteration in loop
// //since let creates different i, so i value will be different when each setTimeout call back fn is executed

// for(let i=1;i<=5;i++){
//   setTimeout(()=>console.log(i),i*1000);
// }

// // another way
// // using closure (if we want to do with var only)

// for(var i=1;i<=5;i++){
//   function print(x){
//     setTimeout(()=>console.log(x),x*1000)
//   }
//   print(i);
// }

// //here in every iteration we are invoking print function with i argument. which means we are sending copy(value) of i to print fn every iteration

// //even though seTimeout is executed seperatly, it remembers x parameter value due to closure and since x value is different for 5 different callback fn in loop it will print as we intended.