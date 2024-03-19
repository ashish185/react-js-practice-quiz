/*
 Synchronous JavaScript: i.e. every statement of the code gets executed one by one.
  So, basically a statement has to wait for the earlier statement to get executed. 

  Asynchronous JavaScript: Asynchronous code allows the program to be executed
   immediately where the synchronous
   code will block further execution of the remaining code until it finishes the current one.
*/
console.log("----------------------Promises in JS-----------------------");
/* 
MDN:
The Promise object represents the eventual completion (or failure) of an asynchronous operation 
and its resulting value.
 */
//In JavaScript, a promise is an object that returns a value which you hope to receive in the future,
// but not now.
// the promise is very well-suited for handling asynchronous operations.
/* 
A promise has three states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed

=new Promise(executor);

The fn passed to the promise constructor is knows as Executor.

EXECUTOR:

This executor is single(*****) CallBack function used to initialize a promise.

This callback function accepts two arguments which are callback functions thar are: resolve and reject

resolve() callback is used to resolve with value or result of another promise.
reject() callback is used to reject the promise with provided reason and error.
------------------------------------------------------------------------------------------------------
THEN:

The then() method returns a Promise. It takes up to (***********) two arguments: 
callback functions for the success and failure cases of the Promise.

Note:***** Dhayan rhe ki then 2 Callback function accept krta h, but promise 1 callback fun accept krta jiske 2 args h

SIGNATURE OF PROMISE:
1.Promise((resolve, reject));
2.then(onFulfilled[, onRejected]);
3.catch(fn) or catch(function(reason){
})
4.finally

The catch() method returns a Promise and deals with rejected cases only.
It behaves the same as calling Promise.prototype.then(undefined, onRejected) 

*/

//Synchronous ex with success resolve promise
//Ex:1
let promise1 = new Promise((resolve, reject) => {
  if (true) {
    resolve("I have completed learning JS.");
  } else {
    reject("I haven't completed learning JS.");
  }
});
// console.log(promise1);
promise1.then(
  (success) => console.log(success),
  (fail) => console.log(fail)
);

//Synchronous ex with rejected promise
//Ex:2
let promise2 = new Promise((resolve, reject) => {
  if (false) {
    resolve("I have completed learning JS.");
  } else {
    reject("I haven't completed learning JS."); 
  }
});
// console.log(promise1);
promise2.then(
  (success) => console.log(success),
  (fail) => console.log(fail) //I haven't completed learning JS.
).catch((res) => {
  console.log('In catch', res);
});

//Synchronous ex with Error
//Ex:3
let promise3 = new Promise((resolve, reject) => {
  throw "Error2"
});
// console.log(promise1);
promise3.then(
  (success) => console.log(success),
  (fail) => console.log("In fail handler", fail) // "Error2"
).catch((res) => {
  console.log('In catch', res);
});


//Throwing error but in then block fail not handled.
//Ex:4
let promise3 = new Promise((resolve, reject) => {
  throw "Error2"
});
// console.log(promise1);
promise3.then(
  (success) => console.log(success),
).catch((res) => {
  console.log('In catch', res); //In catch Error2
});
//Observation: if we don't add fail handler in then block then it goes catch otherwise fail handler will work.

//Asynchronous example
let asyncPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("I have completed learning JS.");
    } else {
      reject("I haven't completed learning JS.");
    }
  }, 5000);
});
asyncPromise.then(
  (success) => console.log("Promise fulfilled: " + success),
  (fail) => console.log(fail)
);
