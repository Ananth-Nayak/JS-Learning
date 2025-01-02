cart = ['kurta','shorts','shirts'];

createOrder(cart)
.then(function(orderId){
  console.log(orderId)
  return orderId
})
.then(function(orderId){
  return proceedToPayment(orderId)
})
.then(function(message){
  console.log(message);
})
.catch(function(err){
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
