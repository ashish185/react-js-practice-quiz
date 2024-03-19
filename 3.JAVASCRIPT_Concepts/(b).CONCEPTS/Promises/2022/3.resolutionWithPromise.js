const API_PROMISES = require("./apiPromises");

API_PROMISES.getLoggedInStatus()
  .then((res) => {
    console.log(res);
    return API_PROMISES.uploadPhotos();
  })
  .then((res) => {
    console.log(res);
    return API_PROMISES.getListOfPhotos();
  })
  .then((res) => {
    console.log(res);
  });

/* 
Output
Logged In successFully!!
Photos Uploaded successFull!!
P1, P2, P3
*/
