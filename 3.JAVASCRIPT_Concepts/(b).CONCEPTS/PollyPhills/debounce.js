const myDebounce = (cb, timeout) => {
  let timer;
  return function(...args){
    if(timer){
      clearTimeout(timer);
    }
    setTimeout(() => cb(...args), timeout)
  }
};

const myThrottle = (cb, timeout) => {
  let flag = true;
  return function(...args){
    if(flag){
      flag = false;
      setTimeout(() => {
        flag = true;
        cb(...args)
      }, timeout)
    }
  }
}