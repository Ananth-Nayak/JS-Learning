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


//allSettled promise will wait for all the promise to be settled irrespective of fulfilled or rejected
//it also return array of object which contains values and errors
//it will give output after maximum time of any promise(here 5 second)
Promise.allSettled([p1,p2,p3])
.then(res =>{
  console.log(res);
})
.catch(err => {
  console.error(err);   
});

