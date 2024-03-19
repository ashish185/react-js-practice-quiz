const trackMe = document.getElementById("trackMe");
trackMe.addEventListener("click", trackUserLocation);

function setTime(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(success);
    }, 2000);
  });
}
function successCallBack(success) {
  setTime(success)
    .then((data) =>
      console.log(data, success)
    ) /* Promise resolveGeolocationPosition 
    {coords: GeolocationCoordinates, timestamp: 1609140198428}coords: GeolocationCoordinates {latitude: 28.895510799999997, longitude: 76.5975947, altitude: null, accuracy: 5332, altitudeAccuracy: null, …}timestamp: 1609140198428__proto__: GeolocationPosition */
    .catch((eror) => console.log(eror));
}
const errorCallBack = (error) => {
  console.log("Error", error);
};

function trackUserLocation() {
  //This do not return promise therefore handling like this
  navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
}

