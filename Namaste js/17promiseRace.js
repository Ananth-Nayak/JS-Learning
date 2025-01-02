const p1 = new Promise((resolve,reject) => {
  // setTimeout(()=>resolve("P1 promise fulfilled"),2000);
  setTimeout(()=>reject("P1 promise is rejected"),2000);
});

const p2 = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("P2 promise is fulfilled"),5000);
  // setTimeout(()=>reject("P2 promise is rejected"),5000);
});

const p3 = new Promise((resolve,reject) => {
  setTimeout(()=>resolve('P3 promise fulfilled'),3000)
  // setTimeout(()=>reject('P3 promise rejected'),3000)
});

//whichever promise get to first settled(rejected/fulfilled), its value will get printed
// time is, time taken by the first promise to be settled (here 2 seconds)
// the output is a single value(rejected or fulfilled) not an array
Promise.race([p1,p2,p3])
.then(res =>{
  console.log(res);
})
.catch(err => {
  console.error(err);   
});