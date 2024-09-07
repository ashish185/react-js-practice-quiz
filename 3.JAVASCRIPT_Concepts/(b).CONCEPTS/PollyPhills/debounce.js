/* 
Debouncing is a technique used to limit the rate at which a function is executed, 
Practical Applications:
1. Search Input: Debounce can be used to delay sending an API request until the user has stopped typing.
2. Window Resize: Debouncing the resize event to prevent frequent updates.
3. Scroll Events: Handling scroll events like infinite scrolling or lazy loading.
*/

function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    // Clear the previous timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/* 
Throttling is another technique used to control the rate at which a function is executed

Practical Applications:
1.Scroll Events: To handle scroll events without overwhelming the browser with too many function calls.
2.Window Resize: Throttling resize events to update the UI efficiently.
3.Button Clicks: To prevent multiple rapid clicks from triggering an action too frequently.
*/

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


/* 
Difference Between Debounce and Throttle:
Debounce: The function is executed after a certain period of inactivity.
Throttle: The function is executed at most once in a specified time period.
*/