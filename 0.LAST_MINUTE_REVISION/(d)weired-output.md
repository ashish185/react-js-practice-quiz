/* 
## QUESTION 1:
 ```js
console.log('+true', +true); //1
console.log('!true', !'true'); //** wrong MyAns: 0, Actual: false
console.log(+'2'); // 2
console.log(-'2'); //** wrong MyAns: 2, Actual: -2
console.log(3 + '2'); // 32
console.log(3 - '2'); // 1
console.log([] == false); //true
if ([]) {
  console.log('enter array'); //enter Array
}
console.log(0 == false); // true
console.log('' == false); // true
console.log(undefined == 0); // ** wrong MyAns: true, Actual: false
console.log(true > 0.5); // true
console.log(NaN == 0); //  ** wrong MyAns: true, Actual: false

console.log("+0 === -0", +0 === -0); //true === Plus minus k Zero k case m shi kam nhi krta
//Object.is() static method determines whether two values are the same value.
console.log("Object.is(-0,+0)", Object.is(+0, -0)) //false
 //  console.log(*'2'); // '2'
 ```

 ## QUESTION 2:
 : They mutates the Original array
 ```js
 /* Shift */
const arr = [10, 20, 30, 40];
const removedElement = arr.shift();

console.log(removedElement); // 10
console.log(arr);            // [20, 30, 40]
```
<!-- Un shift -->
```js
//Un shift inserts the item at first position and return new length of array.
const arr = [20, 30, 40];
const newLength = arr.unshift(10);

console.log(newLength); // 4
console.log(arr);       // [10, 20, 30, 40]
```

## QUESTION 3:
```js
const arr=[1,2,3][4,5,1];
console.log(arr);
```
## QUESTION 4:
```js
const obj={
  1:'a',
  2:'b',
  '2':'b',
  [1]:'b1'
};
console.log(obj);
```
## QUESTION 5:
```js
{
  function print(){
    console.log('Hello')
  }
}
print(); //Hellow
```

## QUESTION 6: 
```js
{
  function print(){
    console.log('Hello')
  }
}
var print;
console.log(print); //fn print, since print takes more priority
```

## QUESTION 6: 
```js
{
  function print(){
    console.log('Hello')
  }
}
var print;
console.log(print); //fn print, since print takes more priority
```


















### Comparison Table:

| **Method** | **Effect**                      | **Return Value**         | **Mutates Array** |
|------------|---------------------------------|--------------------------|-------------------|
| `shift()`  | Removes the first element       | The removed element      | Yes               |
| `unshift()`| Adds elements to the start      | New length of the array  | Yes               |

---

### Usage in Practice:
These methods are often used when working with **queues**:
- `shift()` can be used to dequeue (remove from the front).
- `unshift()` can add items to the front of a queue or stack.
```

