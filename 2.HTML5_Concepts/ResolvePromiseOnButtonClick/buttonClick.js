const btn = document.querySelector('.btn');

const myPromise = new Promise((res, rej) => {
  btn.addEventListener('click', () => {
    res('Clicked')
  });
})

myPromise.then(el => console.log(el));