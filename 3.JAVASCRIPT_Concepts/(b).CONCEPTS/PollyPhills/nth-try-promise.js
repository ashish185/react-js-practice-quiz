let callCount = 0
let fetcher = () => new Promise((resolve, reject) => {
  callCount += 1
  if (callCount >= 3) {
    resolve('bfe')
  } else {
    reject('error')
  }
});


/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  return new Promise((resolve, reject) => {
    let retryCount = maximumRetryCount;
    const retry = () => {
      fetcher().then(res => resolve(res))
      .catch(err => {
        if(retryCount<1){
          reject(err);
        }else{
          --retryCount;
          retry();
        }
      });
    }
    retry();
  });
}


fetchWithAutoRetry(fetcher, 4)
.then((data) => {
  console.log(callCount === 3);
  console.log(data === 'bfe');
}).catch((error) => {
  console.log('err', error);
})