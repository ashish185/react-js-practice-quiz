
const getLoggedInStatus=()=>{
  setTimeout(()=>{
    return '200 Ok'
  }, 1000);
}

// JavaScript is single threaded language, we are able to handle asynchronous thing by using web api of browser.
/* Problem 1 unable to handle Async response */
console.log('first');
let status= getLoggedInStatus();
console.log(status); //status would be undefined
console.log('second');
/* ----------------------------------------------------------------------------------------------------------------- */
//In order to use this value once response will be there, we can use Callback,
const getLoggedInStatus1=(executor)=>{
  setTimeout(()=>{
    executor('200 Ok'); //Passing the response in callback fn.
  }, 1000);
}

const executorFn=(statusMsg)=>{
  console.log(statusMsg);
}

console.log('first1');
getLoggedInStatus1(executorFn);
console.log('second1');
/* Output
first1
second1
200 Ok
*/

