//Finding HTML elements by id, no need to put #
document.getElementById('#xy');
//Finding HTML elements by className & returns the
const htmlCollection = document.getElementsByClassName('xy');
/* How to iterate over dom elements */
for (const node of htmlCollection) {
   console.log(node.innerText);
}

//tag name
getElementsByTagName("p");
document.getElementsByName('name1');
document.getElementsByTagName('li');
//If you want to find all HTML elements that match a specified 
//CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.
document.querySelector('li:nth-child(odd)');
document.querySelectorAll('#gg'); //returns the node list

/* 
There is diff between getQuerySelector and getElementsByClassName
he querySelector() method returns the first element that matches a CSS selector.
and getElementByClassName return HTML collection

Agar HTML collection ko iterate krna h then use for loop,
but agar NodeList ko iterate krna h then for, forEach
https://www.w3schools.com/jsref/met_nodelist_entries.asp
*/
