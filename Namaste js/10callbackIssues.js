// callback fn helps us lot like, to do the asynchronous operations in js
// but there are 2 main issues

//1.callback hell
//lets say, we have an e-commerce webiste, we have to createOrder,after createOrder only we should go to payment method and then updating the order list
//the callback fn inside anothe callback fn which is inside another callback fn and it can go to any deeper level and it is unreadable and unmaintainable, this is callback hell

//example
const cart = ["earphones","mobile","Tv"];

api.createOrder(cart,function(){

  api.goToPaymentMethod(function(){
    
    api.updateOrderList(function(){
      //this can go on and on to any deeper level
      //this code format also called pyramid of doom(check internet for more)
    })

  })

})

// 2. Inversion of control
//since we are passing the callback fn to oher functions, we are giving responsibility of callback fn to the min function and we are loosing the control over the callback fn as it might have some bugs like main fn calling callback fn twice or does not even invoke it, or main function code written in wrong way
//this is another problem of callback fn