const arr = [9,1,6,4,3,-8,-2,1,0,-47];

// if we want to opearate on each element with same fn
const output1 = arr.map(x=>x*x);
console.log(output1)

//filtering array
const output2 = arr.filter(x => x > 0);
console.log(output2)

//reduce function
let sum =0;
for(let i=0;i<arr.length;i++){
  sum+=arr[i];
}
console.log(sum)

// the above is same as
const output3 = arr.reduce((sum,curr) => sum+=curr,0)
//curr is same as arr[i], reduce function operate on each ele and according to callback fn it accumalates value and reduced to single value(in this case sum is accumalator, using callback fn we reduced to all element to single value(sum)), 0 is initial value of sum
console.log(output3)

