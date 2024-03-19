console.log("**************Event trickling***************");
let grandparentT = document.querySelector('#grandparentT');
let parentT = document.querySelector("#parentT");
let childT = document.querySelector("#childT");

/* Event Capturing aka Trickling */
/* 
    Suppose a element is nested inside a element clicked
    have same type of event and listener
    then nested will call after Parent.
*/

// grandparentT.addEventListener("click", ()=>{console.log("grandparentT");}, true) 
// parentT.addEventListener("click", ()=>{console.log("parentT");},true) 
// childT.addEventListener("click", ()=>{console.log("childT");},true) 

/*
//In Capturing
Now if child is clicked
grandparentT
parentT 
childT

//In Bubbling it will be
child
parent
grandparent
*/

/* What will be the output and parentT capture is false */
/* Case1: Capture -> Bubble-> Capture
If child clicked Capture pehle
Ans grandparentT,child,parentT 
*/
/* If the child is clicked */
/* 
grandparentT.addEventListener("click", ()=>{console.log("grandparentT");}, true) 
parentT.addEventListener("click", ()=>{console.log("parentT");},false) //bubble
childT.addEventListener("click", ()=>{console.log("childT");},true)  */
/* 
grandparentT
child
parentT 
T */

/* Case2: Bubble -> Capture -> Bubble */
//parent -> child -> grandparent