function myFunctionTakingTime() {
    console.log("inside myFunctionTakingTime");
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('"HelloTimeTaking"');
        }, 2000);
      });
  }
  
console.log("async function se pehle");

async function example(){
    //Code written here will work synchronously
    const res = await myFunctionTakingTime(); //It waits untill the Promise is resolved or rejected
    console.log(res);
    console.log("Await k bad");
    /* 
    DOING SAME THING WITH PROMISE
    myFunctionTakingTime().then(
    (res) =>{
        console.log(res);
        console.log("await k bad");
    }) */
}

example();
console.log("example function ke bad");
/* Output
async function se pehle
inside myFunctionTakingTime
example function ke bad
"HelloTimeTaking"
Await k bad
*/







   