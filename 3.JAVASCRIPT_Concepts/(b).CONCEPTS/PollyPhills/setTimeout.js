// console.log('start');
// const id = setTimeout(() => {
//   console.log('timeout called');
//  }, 1000);
// console.log('end');

/*  */

function setAndClearTimeout() {
  let id = Math.random().toString();
  let timerMap = {};
  function setTimeoutPoly(callback, delay) {
    const startTime = Date.now();
    timerMap[id] = true;
    const endTime = startTime + delay;
    const trigger = () => {
      if (!timerMap[id]) {
        return;
      }
      if (Date.now() > endTime) {
        callback();
      }
      else {
        // trigger();
        requestIdleCallback(trigger)
      }
    }
    trigger();
    return id;
  }
  function clearTimeoutPoly(id) {
    delete timerMap[id];
  }
  return { setTimeoutPoly, clearTimeoutPoly };
}

const { setTimeoutPoly } = setAndClearTimeout();
console.log('start2');
setTimeoutPoly(() => {
  console.log('timeout called');
}, 1000);
console.log('end2');