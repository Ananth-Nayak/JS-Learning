cart = ["shoe","watch","mobile"];

//old way
createOrder(cart,function(orderId){
  proceedToPayment(orderId,function(orderId){
    updateOrderList(orderId,function(){
      
    })
  })
})

//using promise chaining
const promise = createOrder(cart)
promise
.then(function(orderId){
  return proceedToPayment(orderId) // another asyncronous operation
  
})
.then(function(orderId){
  return updateOrderList(orderId)
})
//since we always returns from asynchronous operation and store it in promise variable so it is better to use return while calling other asynchronous operations in prmoise chain


//in readable format

createOrder(cart)
.then(orderId => proceedToPayment(orderId))
.then(orderId =>updateOrderList(orderId)) 