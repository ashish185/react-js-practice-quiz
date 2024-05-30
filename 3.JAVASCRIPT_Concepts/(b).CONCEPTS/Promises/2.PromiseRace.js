/* 
  Order: Who wins will resolve first
*/

Example 1: Basic Usage
javascript
Copy code
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'one'));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'two'));

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);  // Output: 'two' (promise2 settles first)
});
Example 2: Handling Rejection
javascript
Copy code
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'one'));
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'two'));

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
}).catch((reason) => {
  console.log(reason);  // Output: 'two' (promise2 rejects first)
});
Example 3: Non-Promise Values
javascript
Copy code
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'one'));
const nonPromiseValue = 42;

Promise.race([promise1, nonPromiseValue]).then((value) => {
  console.log(value);  // Output: 42 (non-promise value is treated as resolved)
});
Example 4: Empty Iterable
javascript
Copy code
Promise.race([]).then((value) => {
  console.log(value);  // This will never execute
}).catch((reason) => {
  console.log(reason);  // This will never execute
});
Practical Use Cases
Timeout Handling:

You can use Promise.race to implement a timeout for a promise, rejecting if it takes too long to resolve.
javascript
Copy code
const fetchWithTimeout = (url, ms) => {
  const timeout = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Timeout')), ms));
  const fetchPromise = fetch(url);
  return Promise.race([fetchPromise, timeout]);
};

fetchWithTimeout('https://api.example.com/data', 5000)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
First Response Wins:

When you have multiple redundant requests (e.g., to different servers), and you want to proceed with the first response that arrives.
javascript
Copy code
const server1 = fetch('https://server1.example.com/data');
const server2 = fetch('https://server2.example.com/data');

Promise.race([server1, server2])
  .then(response => response.json())
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));
Promise.race is a powerful tool for managing asynchronous operations, especially in scenarios where timing is critical.