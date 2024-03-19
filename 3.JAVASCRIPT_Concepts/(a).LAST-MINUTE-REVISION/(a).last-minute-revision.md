## This file contains the points which cannot be remain in mind but important ones

1. The keys of prototype object can be iterate through for in loop not with object keys.
```
function Cuboid(){
    this.length = 20;
    this.breadth =30;
}
Cuboid.prototype.height = 10;

const d1 = new Cuboid();
//"Object.keys does not include prototypes keys"
console.log(Object.keys(d1)); //[ 'length', 'breadth' ]

//Whereas for in involves protoype keys
for(let key in d1){
    console.log("for in", key);
}
/* for in length
for in breadth
for in height */
```

## CSS position revision
absolute: position to it's parent ancestor,
    if absolute does not have position relative then parent is body


## Vanilla JS
- To get Elements
    - document.querySelectorAll("div");
    - document.querySelectorAll("#id"); - document.querySelectorAll(".className");
    - document.querySelectorAll("ul li"); // Select all <li> elements within <ul> elements
    - document.querySelectorAll(".aClass, .bClass"); / Select all elements with class "aClass" or "bClass"
    - document.querySelectorAll("tr:nth-child(even)");
- Analogy
    document.querySelectorAll("ul li");// it gives li under ul
    Selector div p : mean all <p> inside div
- Iterate
  list.forEach(div => {
    div.addEventListener("click", event => {
        // Your event handling code here
        console.log("Div clicked!");
    });
});