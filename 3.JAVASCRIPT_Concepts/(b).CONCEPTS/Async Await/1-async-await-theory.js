/* The await expression causes async function execution to pause 
until a Promise is settled
 (that is, fulfilled or rejected), and 
to resume execution of the async function after fulfillment. 
When resumed, the value of the await expression is that of the fulfilled Promise. */

/* The await operator is used to wait for a Promise.
 It can only be used inside an async function. */

//It async and await make promises easier to write"

//EX:1 How async function returns promise internally.

async function myFunction() {
  return "Hello";
  //Or return Promise.resolve("Hello");
}
//This proves that it is myFunction is a promise:
const promiseCallWithAsyncAwait = async () => {
  const res = await myFunction(); //It waits until promise is fulfilled or settled
  console.log("Result with async-await", res);
};

promiseCallWithAsyncAwait();

//Output: Result with async-await Hello
console.log("__________By using Promise____________");
myFunction().then(
  (success) => {
    console.log(success);
  },
  (fail) => {
    console.log(fail);
  }
);

/* 
__________By using Promise____________
Result with async-await Hello 
Hello
*/
