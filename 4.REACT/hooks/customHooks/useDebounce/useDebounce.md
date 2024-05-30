## UseDebounce hook
Debouncing is a technique used to limit the frequency at which a function is invoked. It is particularly useful when handling events that fire rapidly, such as key presses or scroll events. Instead of executing the function immediately on every event, debouncing allows you to delay the execution until a specified period of inactivity has passed. This helps to optimize performance and reduce unnecessary function calls.

## Ways to create useCustom Hook
1. Using useRef: Store the id of setTimeout in useRef.current
Here we don't need to call useCallback as it for other way.
```js
import { useEffect, useRef } from 'react';

const useDebounceWithRef = (callback, delay) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Cleanup the previous timeout on re-render
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};

export default useDebounceWithRef;

```
2. useDebounce Without ref.
```js
const useDebounce = (cb, time, context) => {
  let id;
  return function (...args) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      //cb(...args);
      cb.call(context || this, ...args);
    }, time);
  }
}

export default useDebounce;
```