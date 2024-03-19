//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
const p = Promise.all([1, 2, 3]);
p.then(res => console.log(res));

// The only input promise is already fulfilled,
// so the returned promise gets fulfilled
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
p2.then((res) => console.log(res))


// One (and the only) input promise is rejected,
// so the returned promise gets rejected
const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);
p3.then(res => console.log(res))

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  p.then(res => console.log(res))
  p2.then(res => console.log(res))
  p3.then(res => console.log(res))
});