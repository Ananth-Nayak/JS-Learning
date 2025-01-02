
//example of promise
GITHUB_API = "https://api.github.com/users/Ananth-Nayak"

const promise = fetch(GITHUB_API)
console.log(promise)
//for some time it promiseresult will be undefined and state will be pending
//then it will get the data and state will be fulfilled, immedietly it will call the callback fn using .then
promise.then(function(data){
  console.log(promise)
  console.log(data); //the data we get is immutable means we can change it
})