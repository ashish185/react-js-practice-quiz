## This file contains the points which cannot be remain in mind but important ones

1. The keys of prototype object can be iterate through (for in) loop not with Object.keys.
```js
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
## reduce method normal
```js
/* To Reduce number array to sum of it's value */
const numbers = [1, 2, 3, 4, 5];
 let sum = numbers.reduce(function (accumulator, current,index) {
    console.log(
       `accumulator=${accumulator}|current ${current}|index ${index}`
     );
     return accumulator + current;
 });

```
## CSS position revision
absolute: position to it's parent ancestor,
    if absolute does not have position relative then parent is body
Fixed: Positioned relative to the viewport (the browser window).

## Vanilla JS: try to use intellisense
- const element = document.getElementById("myH1"); 
let text = element.getAttribute("class")
getAttribute, removeAttribute

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
## splice vs slice
    const arr=[1,2,3,4];
    splice(0,2): 0 index se  items remove kardo, [2,3,4], splice(1)
    slice(0,2): [0, n-1] tak ki item de do [1] like substring slice(1   )

## Programmer2.prototype = Object.create(Employee.prototype); Object.create() yad rehna chiye
## this with object this quiz first question
## Call, apply, bind
## New features of React 18
1. Concurrent Rendering: for better performance
2. Automatic batching: setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React will only re-render once at the end (that's batching!)
}, 1000);

## General regex unit testing.
## Phases of Browser: Dom creation(html parsing) -> CSSOM creation -> Render Tree (CSSOM+ DOM) -> Layout -> Paint
## async vs defer
## Promise ka resolve reject setTimeout catch finally code write
## bind ka polyfill so that polyfill likhne ki practice ho jaye

## mp.set('key',value) mp.has('key) //
## for(const el in arr){ }, in means index
## for(const el of arr){ }, in means value, here break and continue works.
## for(let x=0; x>20, x++){ }, tradition for lop
## Prototypal inheritance
## defer vs async
## React.forwardRef(Comp),<Comp ref={ref}/> Comp=(props, ref) not comp({ref})
## React custom hooks can be useOnline(), useToggleSwitch
## Basic form bna lo with input type radio and all.
## Flatten the array, deep cloning. multiLevelFlatten(arr3, [], 3);  

## Object
Object.createProperty(anyObject,   name: {   value: 'John Doe',writable: true,enumerable: true,configurable:true });
Object.defineProperty(anyObject,"name",{writable:false});

## Iterate set like this or 
set.forEach();
for (let i = 2; i <= set.size + 1; i++) {
        if (!set.has(i)) {
            return i;
        }
}

## typescript type vs interface
1. type cannot be implement via classes,
2. interface can be implement
type PointType={
   x: number;
   y: number;
}

function printCoord(obj: PointType) {
  console.log("The coordinate's x value is " + obj.x);
  console.log("The coordinate's y value is " + obj.y);
}
 //it will raise error, while in case interface it would not
type PointType={
   z:1
}
