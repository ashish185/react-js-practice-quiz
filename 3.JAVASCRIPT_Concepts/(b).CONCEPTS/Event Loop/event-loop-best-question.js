async function async1() {
    console.log("Async 1 Start");
    await async2();
    console.log("Async 1 End");
  }
   
  async function async2() {
    console.log("Async 2");
  }
   
  console.log("Script Start");
   
  setTimeout(() => {
    console.log("Timeout");
  }, 0);
   
  await async1();
   
  new Promise((resolve) => {
    console.log("Promise 1");
    resolve();
  }).then(() => {
    console.log("Promise 2");
  });
   
  console.log("Script End");
  
  
  //output
  console.log("Script Start");
  console.log("Script End");
  
   console.log("Async 1 Start");
  console.log("Async 2");
   console.log("Promise 1");
  console.log("Script End");
  
   console.log("Async 1 End");
  console.log("Promise 2");
   console.log("Timeout");