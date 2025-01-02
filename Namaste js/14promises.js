cart = ['kurta','shorts','shirts'];

createOrder(cart)
.then(function(orderId){
  console.log(orderId)
  return orderId  
})
.catch(function(err){  
  console.log(err.message)
})
.then(function(orderId){  //it will get called even createOrder promise rejected
  return proceedToPayment(orderId)
})
.then(function(paymentInfo){ 
  console.log(paymentInfo);
})
.catch(function(err){  
  console.log(err.message)
})
.then(function(){
  console.log("No matter which promise is called i am executed in console:::)!!")
})

//if we attach single catch fn at the end of promise chain, it will be called if any one of promises above is rejected but it is not going to call other promises after
//lets say we have 10 promises, if the 5th promise failed it will call the catch fn which is at the end and from 6th to 10th promise it will not call

// if we want to check the other promises in promise chaining even after rejected, we have to add catch fn accordingly in between them

//if we add the catch fn after 5 promises, if any promise between 1 to 5 is failed the catch function gets called, but it will still look for 6 to 10
//we can add any numbers of catch function with respect to promises



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
    resolve("The Payment is succesful")
  });
}

function vaildateCart(cart){    
  return true;
}
