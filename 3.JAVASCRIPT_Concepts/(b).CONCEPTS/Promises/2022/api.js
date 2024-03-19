/* API 1:  */
const getLoggedInStatus2=(executor)=>{
  setTimeout(()=>{
    executor('I am logged in'); //Passing the response in callback fn.
  }, 1000);
}

/* API 2:  */
const uploadPhotos=(executor)=>{
  setTimeout(()=>{
    executor('Photos Uploaded successFull!!');
  }, 1000);
}

/* API 3:  */
const getListOfPhotos=(executor)=>{
  setTimeout(()=>{
    executor('P1, P2, P3'); //Passing the response in callback fn.
  }, 1000);
}

module.exports = { getLoggedInStatus2, uploadPhotos, getListOfPhotos }