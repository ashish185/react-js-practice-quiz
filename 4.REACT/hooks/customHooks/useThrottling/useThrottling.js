let id = true;
import { useEffect } from 'react';
/* 
Throttling is a technique, where a given function runs only once at a specified period of time

Throttling could be used in scenarios, where our code does expensive CPU/Network tasks on frequently fired events:

Listening to HTML Input element change
Listening to window resize or scroll
Listening to mouse cursor position change

*/
let setTimeoutId;
const useThrottling = (cb, time) => {
  useEffect(() => {
    return ()=> {
      if(setTimeoutId){
        clearTimeout(setTimeoutId);
      }
    }
  }, [])
  return function (...args) {
    if (id) {
      id = false;
      setTimeoutId = setTimeout(() => {
        id = true;
        cb(...args);
      }, time);
    }
  }

}
export default useThrottling;