cart = ['kurta','shorts','shirts'];

createOrder(cart)
.then(function(orderId){
  console.log(orderId)
  return orderId
})
.catch(function(err){
  console.log(err.message)
})



function createOrder(cart){

  const promise = new Promise(function(resolve,reject){
    if(!vaildateCart(cart)){
      const err = new Error('Cart is not valid') //creating error to pass in reject
      reject(err) 
      //here reject will call the catch function(which means promise failed) which is attached to createOrder promise
      //we are passing error message to catch, and catch will log in console error
    }
    // logic for resolving/fulfilling  promise
    const orderId = '70231'
    if(orderId) {
      setTimeout(()=>{
        resolve(orderId) 
      },5000)
      // we are resolving the promise after 5 seconds if cart is validated
      // no need to use seTimeout to resolve(just used here for example)
      //resolve function will call the 'then' method's callback function
    }
  });
  return promise;
}


function vaildateCart(cart){    
  //using this fn to decide wheather to be createOrder promise resolved or rejected
  return true;
}
