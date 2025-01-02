cart = ['kurta','shorts','shirts'];

createOrder(cart)
.then(function(orderId){
  console.log(orderId)
  return orderId  
})
.catch(function(err){  
  console.log(err.message)
})
.then(function(orderId){  
  return proceedToPayment(orderId)
})
.then(function(paymentInfo){ 
  console.log(paymentInfo);
})
.catch(function(paymentInfo){  
  console.log(paymentInfo)
})
.then(function(){
  console.log("No matter which promise is rejected, i am executed in console!!!")
})


function createOrder(cart){

  const promise = new Promise(function(resolve,reject){
    if(!vaildateCart(cart)){
      const err = new Error('Cart is not valid') 
      reject(err) 
    }
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
    reject("The Payment was not succesful")
  });
}

function vaildateCart(cart){    
  return true;
}
