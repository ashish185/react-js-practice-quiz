/* 
Event Delegation: Instead of attaching eventHandler to each and every child, we attach event listener to
parent.

Event Delegation is based upon Event Bubbling
*/
/* 
Suppose we have 1000 products in category and I want to add Event listerner to each object.
Adding event listener to each product cause Memory issue, Performance issues and Code redudancy.
Rather adding Event listner to each object we are adding single event handler to parent. This is called
event delegation.
It happens becaues of Event Bubbling

Benefits: 
1) Saves memory, Improve performance
2) Less Code
3) Dom Manipulation: if the new children are added we don't need to add lister to each child.

Cons:
1)BLUR,focus, resizing events do not Bubbled up.
2) If any event stop propogation then it can not be used directly

  <ul class="addtocart">
    <li>Redmi 9 Add to cart </li>
    <li>Redmi 9 pro Add to cart </li>
    <li>Samsung Add to cart</li>
    <li>Long list Add to cart</li>
  </ul>
*/
console.log('Query selector', document.querySelector('.addtocart'));
document.querySelector('.addtocart').addEventListener('click',(event  
)=>{
  //If any of the child is clicked, Event bubbling takes place, Event raises.
  //If list contain other product than which we don't want to add to cart option
  if(event.target.tagName === 'LI'){
    console.log(event.target);
  }
})