const API_URL = "https://api.github.com/users/Ananth-Nayak";

async function handlePromise(){
try{
const data = await fetch(API_URL);
const json = await data.json();
console.log(json);
}
catch(err){
  console.error(err)
}
}

handlePromise();

// traditional way of handling error without using try and catch
// handlePromise().catch((err)=>console.error(err))