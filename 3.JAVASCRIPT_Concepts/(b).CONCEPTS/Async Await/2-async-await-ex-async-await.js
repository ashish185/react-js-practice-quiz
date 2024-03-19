const getPosition = () =>
  new Promise((resolve, reject) => {
    resolve("Rohtak");
  });
  
const addDelay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Delay completed");
    }, 2000);
  });
};

const callingPromises = async () => {
  const addDelayResult = await addDelay();
  console.log(addDelayResult);
  const getPositionResuult = await getPosition(); // await block kar leta h block ka until or unless reject or resolve nhi ho jata promise.
  console.log(getPositionResuult);
  console.log('This is sync code');
  setTimeout(() => {
    console.log("SetTime outside then can' be executed parallel in async await but can be in promise");
  }, 500);
};

//Function Invocation
callingPromises();
console.log("After");

/* 
After
Delay completed
Rohtak
Code outside then can be executed paralley in promise

  */
