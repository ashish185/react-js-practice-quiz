/* API 1:  */
const getLoggedInStatus = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Logged In successFully!!');
    }, 1000);
  });
}

/* API 2:  */
const uploadPhotos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Photos Uploaded successFull!!');
    }, 1000);
  });
}

/* API 3:  */
const getListOfPhotos=(executor)=>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('P1, P2, P3');
    }, 1000);
  });
}

module.exports = { getLoggedInStatus, uploadPhotos, getListOfPhotos }