// BIND METHOD

// what call and apply method do is they are calling/invoking function
// but what bind method does is it will bind that function with the object we specified, we can execute afterwards whenever we want to invoke that function

let name1 = {
  firstName:"Narendra",
  lastName:"Gandhi",
}

let printFullName = function (city,country){
  console.log(`${this.firstName} ${this.lastName}, ${city} ${country}`)
}

let namePrint = printFullName.bind(name1,"Vadodara","Italy");
let namePrint2 = printFullName.bind(name1,);

namePrint();
namePrint2("Mangolre","India")