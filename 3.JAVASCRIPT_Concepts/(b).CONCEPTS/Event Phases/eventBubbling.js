console.log("**************EVENT BUBBLING***************");
/* 
Event bubbling is a method of event propagation in the HTML DOM API.
when an element inside another element, 
and both elements have registered a handle event.

Some of the EVENTS do not propagate: focus, blur, resizing

Syntax:

addEventListener(type, listener, useCapture)
Parameters:
type: Use to refer to the type of event.
listener: Function we want to call when the event of the specified type occurs.
userCapture: Boolean value. Boolean value indicates event phase.
By Default useCapture is false. It means it is in the bubbling phase.

In addEventListener("click", ()=>{console.log("grandparent");})
Type: click,
listener: ()=>{console.log("grandparent");} i.e Function we call
userCapture: False (By default) 

if useCapture is false or not given then Event bubbling
else Trickling down aka EVENT CAPTURING 

/* 
Consider this in index.html
<div id="grandparent"class="divClass">
      Grand Parent
      <div id="parent" class="divClass">
        Parent
        <div id="child" class="divClass">
          child
        </div>
      </div>
    </div>

*/

let grandparent = document.querySelector('#grandparent');
let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

/* Event Bubbling */
/* if an event occurs on a given element, 
it will be triggered on its parent as well and on its parent’s
parent and all the way up, until the html element.

condition:the bubbling effect is only noticeable when at least one 
ancestor of the event’s origin has a listener for the same type of event.
*/

// grandparent.addEventListener("click", ()=>{console.log("grandparent");}) 
// parent.addEventListener("click", ()=>{console.log("parent");}) 
// child.addEventListener("click", ()=>{console.log("child");}) 
/* When child is clicked
// Output 
child
parent
grandparent
*/

/* STOP pronation method */

grandparent.addEventListener("click", ()=>{console.log("grandparent");}) 
parent.addEventListener("click", (e)=>{
    console.log("parent");
    e.stopPropagation();
}) 
child.addEventListener("click", ()=>{console.log("child");}) 
/* 
if child is clicked then it gives
child
parent
*/

/* 
click,
mouseOver
keyDown
*/