const getPosition = () => new Promise((resolve, reject) => {
  resolve("Rohtak");
});

const addDelay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Delay completed");
    }, 2000);
  });
};

const callingPromises = () => {
  addDelay()
    .then((el) => {
      console.log(el);
      return getPosition(el);
    })
    .then((resolve) => {
      console.log(resolve);
    });
    // mtlb h ye h ki agr hum kuch asynchrounous operation krna chahte h jnha promise call ho rha h
    // to hum kar skte h,
    //but async await k case m line by line chlega jo kuch function m h
    setTimeout(()=>{
        console.log("Code outside of then() can be executed paralley in promise");
    },1000)
};
callingPromises();

//Compare the output in case of Promise, delay takes 2seconds therefore last statement is at first.
/* 
Code outside of then() can be executed paralley in Promise
Delay completed
Rohtak
*/
// In case of async await
/* 
Delay completed
Rohtak
Code outside then can be executed paralley in promise
 */