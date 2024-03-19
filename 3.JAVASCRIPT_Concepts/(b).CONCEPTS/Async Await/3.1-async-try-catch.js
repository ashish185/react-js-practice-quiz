/* We handle Error case in Async await by try/catch */
const getPosition = () =>
  new Promise((resolve, reject) => {
    resolve("Rohtak");
  });

const addDelay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Reject Delay completed");
    }, 2000);
  });
};

const callingPromises = async () => {
  try {
    console.log("await addDelay()-", await addDelay());
    console.log("await getPosition()-", await getPosition());
    setTimeout(() => {
      console.log("Code outside then can be executed paralley in promise");
    }, 1000);
  } catch (error) {
    console.log("in Error");
    console.log(error); //Reject Delay completed or promise m hum .then(succes => log success, fail => logs fail)
    }
  console.log("try k bhar wali to chlegi hi");
};

callingPromises();

/* 
Note(***************): Confusion can come, in Promise. catch is callback function whereas here it is a simple try catch block.
p1.then().catch(()={})
*/
/* 
Reject Delay completed
try k bhar wali to chlegi hi
*/
