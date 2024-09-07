const promise1 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    setTimeout(resolve, 1000, 'Message1');
  }
  reject('Failure1');
});

const promise2 = Promise.resolve(1);
const promise3 = Promise.resolve(2);

Promise.any([promise1, promise2, promise3]).then(ans => console.log(ans));