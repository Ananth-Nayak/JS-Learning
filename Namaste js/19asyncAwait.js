const p  = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Promise Resolved Succesfully!!");
  },5000);
});

const p1  = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("Promise1 Resolved Succesfully!!");
  },10000);
});


//using async and await to handle promise

//await can only be used in an async function
async function promiseHandler(){
  console.log("at the beginning of async fn")
  //here async fn will get temporarly suspends, and wait for the promise to resolve
  //after resolving promise only it moves to the next line in async fn when await is used
  const value = await p;
  console.log(value);

  console.log("after promise 1")

  const value1 = await p1
  console.log(value1)
  console.log("After promise 2")
  //even if the p1 is resolved in 5 seconds, since p is before p1 and p takes 10 seconds, p1 will wait for p to be resolved
  //if p is 5 seconds and p1 is 10 seconds, p will printed after 5 seconds but p1 after 10
}

promiseHandler();

//handling errors

//this setTimeout will be printed after 5 seconds, it does not wait for the promise to be resolved, even though this was called after async function
// if we use await, only the async fn gets suspended till the promise is resolved, but the main thread will not be blocked
setTimeout(()=>console.log("seTimeout in main thread (3seconds)"),3000)



// normal way of handling promise
// in normal way(using then and catch), js does not wait for the promise to be resolved
// p.then(res => console.log(res)).catch(err => console.error(err));