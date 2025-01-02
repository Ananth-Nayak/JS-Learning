const users = [
  {firstName:"Ananth",lastName:"Nayak",age:23},
  {firstName:"Donald",lastName:"Trump",age:80},
  {firstName:"Katrina",lastName:"Kapoor",age:35},
  {firstName:"Virat",lastName:"Kohli",age:29},
  {firstName:"Yashaswi",lastName:"Jaiswal",age:23},
]

// give every users fullname
const fullNameList = users.map(x => x.firstName + " " + x.lastName);
console.log(fullNameList);

//print the list of users whose age is below 30
const young = users.filter(x => x.age < 30);
console.log(young);

//print the list of users fullname whose age is below 30
const youngFullName = users.filter(x => x.age < 30).map(x => x.firstName + " " +x.lastName)

// same using reduce
const youngFullName1 = users.reduce((acc,curr)=>{ //curr means each user object
  if(curr.age < 30){
    acc.push(curr.firstName + " " + curr.lastName);
  }
  return acc
},[])

console.log(youngFullName)
console.log(youngFullName1)


//give obj in which occurances of age should be in key value pair
const occurance = users.reduce((acc,curr)=>{
  if(acc[curr.age]){
    acc[curr.age]++;  //if we got the same age again
  }
  else{
    acc[curr.age] = 1;   // if age occurance is first time
  }
  return acc
},{});
//since we have to returm a object, accumalator should be initilized to empty object
//curr is the each element of array

console.log(occurance);