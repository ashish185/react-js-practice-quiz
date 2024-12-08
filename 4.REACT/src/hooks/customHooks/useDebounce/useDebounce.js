let id; // Esko bahr kr denge to Use Callback krne ki need nhi
const useDebounce = (cb, time, context) => {
  return function (...args) {
    if (id) {
      clearTimeout(id);
    }
    /* Id assign pura run hone ka bad hi hogi */
    id = setTimeout(() => {
      //cb(...args);
      cb.call(context || this, ...args);
    }, time);
  }
}

export default useDebounce;