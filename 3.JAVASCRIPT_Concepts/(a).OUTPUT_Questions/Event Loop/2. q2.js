/* This is Question tells whether we know setTimeOut
and setInterval properly or not.
*/
let a=true;
let c=0;

setTimeout(() =>{
 a=false;
},2000)

setInterval(()=>{
    if(a){
        console.log(c++);
    }
}, 200);

/* outputs */
//What's wrong in this question?
//Ans: Cursor stuck at 8

/* Solution of this problem is */
// by crete id of the setInterval then clear it in setTimeOut
