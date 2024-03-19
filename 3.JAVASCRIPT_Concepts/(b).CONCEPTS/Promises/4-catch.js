
console.log("_________Chaining after a catch________________________");
//Ex:1
new Promise((resolve, reject) => {
    resolve('Then arguments learning');
})
.then(fullfill => {
    console.log(fullfill);
}, error =>
    console.log(error)
).catch(() => {
    console.error('Do that');
})

//Ex:2: Agar catch k bad bhi agar then lga diya to vo 'then' block bhi chlega
/* We can put catch anywhere after promise w */
new Promise((resolve, reject) => {
    console.log('Initial');
    resolve();
})
.then(() => {
    console.log('In then');
    throw new Error('Something failed');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});
/* Initial
In then
Do that
Do this, no matter what happened before
 */

// Ex3: If we don't resolve or reject promise it will always be in pending state.
new Promise((resolve, reject) => {
    console.log('Initial');
    /* resolve(); */ //If we don't resolve or reject promise it will always be in pending state
})
.then(() => {
    console.log('In then');
    throw new Error('Something failed');
    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});

/* Output: 
Intial
*/

new Promise((resolve, reject) => {
   /*  throw new Error('Something failed'); */
    console.log('Initial1');
    throw new 'Something failed';
    resolve(); //If we don't resolve or reject promise it will always be in pending state
})
.then(() => {
    console.log('In then');
})
.catch((msg) => {
    console.log(msg);
})
.then(() => {
    console.log('Then after catch');
});