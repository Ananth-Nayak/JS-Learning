function Counter(){
  var count = 0;
  this.increment = ()=>{
    count++;
    console.log(count);
  }
  this.decrement = ()=>{
    count--;
    console.log(count);
  }
  console.log(this)
}

let counter1 = new Counter()

counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();
