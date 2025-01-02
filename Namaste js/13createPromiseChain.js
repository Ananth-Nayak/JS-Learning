cart = ['kurta','shorts','shirts'];

createOrder(cart)       //createOrder promise called with cart
.then(function(orderId){  //createOrder will generate orderId when the promise is resolved
  console.log(orderId)
  return orderId       // we are returning orderId for next promise
})
.then(function(orderId){  //this fn then takes the orderId from above
  return proceedToPayment(orderId) //this promise will be called with orderId
})
.then(function(paymentInfo){  //if above promise is resolved it will call this then method with payment info
  console.log(paymentInfo);
})
.catch(function(err){   //if any one of the promises cannot be resolved then this catch will called with the error message of failed promise
  console.log(err.message)
})



function createOrder(cart){

  const promise = new Promise(function(resolve,reject){
    if(!vaildateCart(cart)){
      const err = new Error('Cart is not valid') 
      reject(err) 
    }
    // logic for resolving/fulfilling  promise
    const orderId = '70231'
    if(orderId) {
      setTimeout(()=>{
        resolve(orderId) 
      },5000)
    }
  });
  return promise;
}

function proceedToPayment(orderId){
  return new Promise(function(resolve,reject){
    resolve("The Payment is succesful")
  });
}

function vaildateCart(cart){    
  //using this fn to decide wheather to be createOrder promise resolved or rejected
  return true;
}
