// cart = ["Shoe","Sunglasses","Watch"];

// createOrder(cart,function(orderId){
//   proceedToPayment(orderId);
// }); // normal way and we are giving control to createOrder API

// const promise = createOrder(cart)
// //at the time being promise has {data:undefined} undefined data and other code are getting executed

// //when the promises are fulfilled(completed), data is stored inside promise object and it will definetely call the callback fn using .then
// //basically when we get the data from asynchronous operation .then will call the callback function.
// //this code is readable, maintainable and we gotn the control over the call back function
// promise.then(function(orderId){
//   proceedToPayment(orderId)
// });

//example of promise
// GITHUB_API = "https://api.github.com/users/Ananth-Nayak"

// const promise = fetch(GITHUB_API)

// promise.then(function(data){
//   console.log(data);
// })