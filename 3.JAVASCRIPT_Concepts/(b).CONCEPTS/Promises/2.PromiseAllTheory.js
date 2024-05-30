/* Theory:
Promise.all
1.Jab sare resolve ho jayenge tbhi hi response aayega
2.If one rejects then all rejects
3.Order of promise remains the same.
*/

/* Case1: All settled: Promise will settle: Promise will settle */
Promise.all([Promise.resolve('1'), Promise.resolve('2')])
.then(res=> console.log(res)); // ["1", "2"]

/* Case2: Ist settled but 2nd rejected: Promise will reject */
Promise.all([Promise.resolve('1'), Promise.reject('2ndReject')])
.then(res=> console.log(res))
.catch(err=> console.log("in catch", err)); //In Catch 2nd reject

/* Case3: Ist reject but 2nd Resolved: Promise will reject */
Promise.all([Promise.reject('1stReject'), Promise.reject('2ndReject')])
.then(res=> console.log(res)).catch(err=> console.log("in catch", err)); //In Catch 1st reject


/* Question: What is the difference between Promise.allSettled() vs Promise.all()? */ 
/* 
Promise.all: It resolves only when all promises passed to it ( as an array) resolves 
else it will reject with the first rejected promise error.

Promise.allSettled: This one will always get resolved with an array having info
 about resolved and rejected promises. Have a close look at following properties (status, value, reason ) of resulting array.
*/

/* In this example whether the promise rejects it always settle in resolved state, 
with status of each promise.
*/
Promise.allSettled([Promise.resolve('1'), Promise.reject('2ndReject')])
.then(res=> console.log(res))
.catch(err=> console.log("in catch", err)); //In Catch 2nd reject

/* 
[
    {
        "status": "fulfilled",
        "value": "1"
    },
    {
        "status": "rejected",
        "reason": "2ndReject"
    }
]
*/