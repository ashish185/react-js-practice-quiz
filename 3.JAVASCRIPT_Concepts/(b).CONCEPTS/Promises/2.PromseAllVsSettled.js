/* 
Promise.allSettled return object with information as status,value for success and
status, reason for failure
Ex: [{status, value}, {status, reason}]
*/

Promise.all([Promise.resolve('1'), Promise.reject('2ndReject')])
.then(res=> console.log(res))
.catch(err=> console.log("in catch", err)); //In Catch 2nd reject

Promise.allSettled([Promise.resolve('1'), Promise.reject('2ndReject')])
.then(res=> console.log(res))
.catch(err=> console.log("in catch", err)); //Will Not go into catch instead resolved
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