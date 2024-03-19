const trackMe = document.getElementById("trackMe");
trackMe.addEventListener("click", trackUserLocation);

function successCallBack(success) {
  return setTimeout(console.log("Success", success), 2000);
}
const errorCallBack = (error) => {
  console.log("Error", error);
};

function trackUserLocation() {
  navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
}

/*
getCurrentPosition(callbackSuccess1, callbackError 
)
Now In callbackSuccess1  we are using another function that is setTimeout 
which is having another callback function i.e console.log() this is called
CallBack Hell

Definition: When callbacks are nested into another callback.

Problem: It is cumbersome to read callbacks

Solution: Promises

*/
