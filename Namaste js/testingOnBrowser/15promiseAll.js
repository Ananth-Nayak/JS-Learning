const p1 = new Promise((resolve,reject) => {
  // setTimeout(()=>resolve("P1 promise fulfilled"),2000);
  setTimeout(()=>reject("P1 promise is rejected"),2000);
});

const p2 = new Promise((resolve,reject)=>{
  // setTimeout(()=>resolve("P2 promise is fulfilled"),5000);
  setTimeout(()=>reject("P2 promise is rejected"),5000);
});

const p3 = new Promise((resolve,reject) => {
  // setTimeout(()=>resolve('P3 promise fulfilled'),3000)
  setTimeout(()=>reject('P3 promise rejected'),3000)
});

// Promise.all([p1,p2,p3])
// .then(res =>{
//   console.log(res);
// })
// .catch(err => {
//   console.error(err);   
// });

// Promise.allSettled([p1,p2,p3])
// .then(res =>{
//   console.log(res);
// })
// .catch(err => {
//   console.error(err);   
// });


// x
Promise.any([p1,p2,p3])
.then(res =>{
  console.log(res);
})
.catch(err => {
  console.error(err.errors);   
});
