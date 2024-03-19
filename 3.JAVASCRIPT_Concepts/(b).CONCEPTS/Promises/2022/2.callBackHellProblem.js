const API = require('./api');
//----------------------------------------------------------------------------------------------------------------- 

/* Now the task is use logged in response, if success then upload photos if upload success then getListOfPhotos();
logged_in->upload photos->getListOfPhotos
It forms a triangular kind of thing.
PROBLEMS:
1. The code looks messy.
2. In order to handle reject state, we need to pass reject callback function but promise had internally resolve and reject.
*/

console.log('first2');
/* show newly Upload photos */
API.getLoggedInStatus2((success) => {
  console.log(success);
  API.uploadPhotos((isUploaded) => {
    console.log(isUploaded);
    API.getListOfPhotos((listOfPhotos) => {
      console.log(listOfPhotos);
    })
  })
});
console.log('second2');
/* 
first2
second2

I am logged in
Photos Uploaded successFull!!
P1, P2, P3
*/