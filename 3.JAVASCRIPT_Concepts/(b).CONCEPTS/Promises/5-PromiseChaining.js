/*
 To execute two or more asynchronous operations back to back, 
 where each subsequent operation starts when the previous operation succeeds, 
 with the result from the previous step. We accomplish this by creating a promise chain.

 Promise chaning helps to avoid callback hell 
*/

const pc = document.getElementById("promise-chaining");
pc.addEventListener("click", trackUserLocation1);

function setTime(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(success);
    }, 2000);
  });
}

function getUserLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      }
    );
  });
}
function trackUserLocation1() {
  let userLocation;
  getUserLocation()
    .then((location) => {
      userLocation = location;
      return setTime("Timeout Success"); /*  <- Intead we can write then code here but we don't
      do this as Readablit will not maintained here.
      It will again go in Pending state
      */
    })
    .then(
        //This operation starts when the previous operation succeeds
      (prmiseMsg) =>
        console.log("Prmomise msg is", prmiseMsg, "location is", location)
     );
     /* Prmomise msg is Timeout Success location is Location 
      {ancestorOrigins: DOMStringList,
         href: "http://127.0.0.1:5501/assets/scripts/Promises/promise.html",
          origin: "http://127.0.0.1:5501", protocol: "http:", host: "127.0.0.1:5501", …}
     */
}

/*
getCurrentPosition(callbackSuccess1, callbackError 
)
Now In callbackSuccess1  we are using another function that is setTimeout 
which is having another callback function i.e console.log() this is called
CallBack Hell

Defination: When callbacks are nested into another callback.

Problem: It is cumbersome to read callbacks

Solution: Promises

*/
