/* We have two global object one is document other is Window */
/*JavaScript is a "hosted language". The browser as host environment exposes this DOM API to your JS code automatically. */
//console.dir(window); //Conbsole.dir use hota  h directory dekhne k liye element ki,
//It can be used with live server as it is working with Node nameOfJS
//Window object contains all the information about current window
//It is the top most gloabl object,contains all the api's which brwosers exposes to us.
//alert("Alert dikhega"); // Beacuse javascript parses every object with window.
// Internally it like windows.alert();

console.log('------------Document---------');
/* Document is also a part of Window */
/* 
<header>
    <h1 id="main-title">Dive into the DOM!</h1>
</header>
<ul>
    <li>Item 1</li>
    <li class="list-item">Item 2</li>
    <li class="list-item">Item 3</li>
</ul>
*/
/* Hum Dom manipulation kar rhe h, That's why it is important that 
HTML load ho jaye uske bad script chle so in that case we need to put  defer  in <script src="xyz.js" defer> tag.
 */
//Give the first matching element <ul> </ul> k andar jo bhi hoga mil jayega
// console.dir("document.querySelector('ul') - ", document.querySelector('ul'));
//Give the first matching element with className
console.log("document.querySelector('.list-item') - ",document.querySelector('.list-item'));
console.log("document.querySelectorAll('#main-title') - ",document.querySelectorAll('#main-title'));
/* NodeList(2) [li.list-item, li.list-item]
0: li.list-item
1: li.list-item
length: 2 */

/* It's like selectors in CSS */
console.log("document.querySelectorAll('.list-item') - ",document.querySelectorAll('ul li:first-of-type'));

//JavaScipt se change kar skte ho data
const h1 = document.querySelector('h1');
h1.className='CSS class';

//What is the differenece between attributes and properties in javascript?
/*Ans: Attributes assosicated with HTML elements and properties associated with JS object
So when you change some property, atrributes changes because of Live Syncing.
Attributes are alays mapped to properties.
But some of the properties like (value, id)do not reflect on chaning propeties beacuas of 1 way live sync.
In that acase we require like
obj.setAttribure('value',123)
 */
