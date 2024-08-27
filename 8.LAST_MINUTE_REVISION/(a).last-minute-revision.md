## PolyPhill type question where callback is used
```js
const apiCall= (param) => {console.log(1)};
apiCall('anyParam')

const debouncedApiCall=useDebounce(apiCall)
debouncedApiCall('anyParam');

function(cb){
  
  return fn(...args){
    
  }
}
```
### Minor output issues
var a= 12 ** 2 // 144 it is Math.pow(12,2);



## This file contains the points which cannot be remain in mind but important ones

1. The keys of prototype object can be iterate through (for in) loop not with Object.keys.
```js
function Cuboid(){
    this.length = 20;
    this.breadth =30;
}
Cuboid.prototype.height = 10;

const d1 = new Cuboid();
//Object.keys does not include prototypes keys
console.log(Object.keys(d1)); //[ 'length', 'breadth' ]

//Whereas for in involves prototype keys
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
// agar reduce method m koi initializer nhi diya to, acc set to first value of array and current will be    point to second and index is 1
const numbers = [1, 2, 3, 4, 5];
 let sum = numbers.reduce(function (accumulator, current,index) {
    console.log( `accumulator=${accumulator}|current ${current}|index ${index}`);
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
    - - document.querySelectorAll("ul>li"); // Select all <li> under <ul> elements but don't include elements inside li
    - document.querySelectorAll(".aClass, .bClass"); / Select all elements with class "aClass" or "bClass"
    - document.querySelectorAll("tr:nth-child(even)");
- Analogy
    document.querySelectorAll("ul li");// All li children inside ul, even the li has sub child
- Iterate
  list.forEach(div => {
    div.addEventListener("click", event => {
        // Your event handling code here
        console.log("Div clicked!");
    });
});
## splice vs slice
- Splice: Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
- array.splice(start, deleteCount, item1, item2, ..., itemN);
    item1, item2, ..., itemN (optional): These are the new elements (zero or more) to insert at the start index. 
    ```js
    const arr=[1,2,3,4];
    splice(0,2): // return [1,2],original arr becomes [3,4]
    splice(1): // Remove all the items from index 1, it returns [2,3,4] and original arr becomes [1]
    ```
- array.slice(start, end:exclusive)
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
## bind ka polyfill: Internal it is uses apply so that polyfill likhne ki practice ho jaye
## Map
```js
mp.set('key',value) mp.has('key) map.get(key)//
//1. size is not a function of Map, it's property of map just like length
mp.size() //Incorrect
mp.size //Correct
mp.keys()
//How to iterate map
// How to get the fist value of Map using next().value
mp.keys().next().value => first key

for (const [key, value] of map) {
  console.log(`Key: ${key}, Value: ${value}`);
}

for (const key of map.keys()) {
  const value = map.get(key);
  console.log(`Key: ${key}, Value: ${value}`);
}
```
## for(const el in arr){ }, in means index
## for(const el of arr){ }, in means value, here break and continue works.
## for(let x=0; x>20, x++){ }, tradition for lop
## Prototypal inheritance
## defer vs async
## React.forwardRef(Comp),<Comp ref={ref}/> Comp=(props, ref) not comp({ref})
## React custom hooks can be useOnline(), useToggleSwitch
## Basic form bna lo with input type radio and all.
## Flatten the array, deep cloning. multiLevelFlatten(arr3, [], 3);  
## memoize args caching
```js
console.log([1,2 ,3].toString()); //'1,2,3'
console.log(JSON.stringify([1,2 ,3])); //[1,2,3]
```

## Object
Object.createProperty(anyObject,   name: {   value: 'John Doe',writable: true,enumerable: true,configurable:true });
Object.defineProperty(anyObject,"name",{writable:false});

## Iterate set like this or 
set.add(1);
set.forEach();
for(const val of set.values()){

}
for (let i = 2; i <= set.size + 1; i++) {
        if (!set.has(i)) {
            return i;
        }
}
const arr=[...set];

## typescript type vs interface
1. type cannot be implement via classes,
2. interface can be implement
type PointType={
   x: number;
   y: number;
}
```js
function printCoord(obj: PointType) {
  console.log("The coordinate's x value is " + obj.x);
  console.log("The coordinate's y value is " + obj.y);
}
 //it will raise error, while in case interface it would not
type PointType={
   z:1
}
``
3.  const onAddClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
}
```

## HTML FORM Tags
<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
<input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
<input type="datetime-local" id="meeting-time" name="meeting-time" value="2018-06-12T19:30"   min="2018-06-07T00:00" max="2018-06-14T00:00" />
<input type="email" id="email" pattern=".+@example\.com" size="30" required />

## Infinite function currying
```js
const sumInfinite = (a) => {
  return (b) => {
    return b ? sumInfinite(a + b) : a;
  }
}

console.log(sumInfinite(2)(5)(3)());
```
