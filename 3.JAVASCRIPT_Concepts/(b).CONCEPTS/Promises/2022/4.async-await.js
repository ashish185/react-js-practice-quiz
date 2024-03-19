const API_PROMISES = require("./apiPromises");
//----------------------------------------------------------------------------------------------------------------- 

/*
Async 
*/

const instagramSteps = async () => {
  const loggedInSuccessFully = await API_PROMISES.getLoggedInStatus();
  console.log(loggedInSuccessFully);
  const uploadSuccessFully = await API_PROMISES.uploadPhotos();
  console.log(uploadSuccessFully);
  const photos = await API_PROMISES.getListOfPhotos();
  console.log(photos);
};
console.log('First');
instagramSteps();
console.log('Second');
/* 
First
Second
Logged In successFully!!
Photos Uploaded successFull!!
P1, P2, P3
*/