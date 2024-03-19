console.log('************************SPREAD OPERATOR**************************');
/* Spread operator in javascript used to pull elments from the array and object.
  1) It is helpful in providing values in argument accepting seprate values.
  2) For objects it gives references.
*/
const arr= [ 3,2,1];
//For ex ye Math.min direct array nhi leta, ye indvidual element leta h 
console.log("min val is ",Math.min(4,1,-1)); // -1
console.log("min val with arr ",Math.min(arr)); // NaN
console.log("min val spread opertor ",Math.min(...arr)); //1

/*CASE1): Spread operator When not nested */

const intialObj = [{ name:'ash1'}, {name: 'ash2'} ];
const copyObj = [...intialObj];
// Changing intial obj not copied obj

intialObj[1].name='singhal';
console.log("After changing val of ref spread operator", copyObj);
//Output is: [ { name: 'ash1' }, { name: 'singhal' } ]
//Expected:  [{ name:'ash1'}, {name: 'ash2'} ];

// So this proves that spread operator copy references of objects of array.
// what if we want only copy of it.
const arrOfObj2 = [{ name:'ash1'}, {name: 'ash2'} ];
arrOfObj2[1].name='singhal';
console.log('map',arrOfObj2.map( el => { return {name:el.name} }))

/*CASE2): Spread operator When Nested */
const nestedArrOfObj = [{ name:'ash1'}, {name: {fullName:'ash2 Singhal'}} ];
const copiedNestedObjBySpreadOp = [...nestedArrOfObj];
console.log("NestedObj copied intial",copiedNestedObjBySpreadOp);
//Changing intial obj not copy obj still copied obj chnages
nestedArrOfObj[1].name.fullName = 'Ashish Singhal';
console.log("Do the copied changes?",copiedNestedObjBySpreadOp);
//Output [ { name: 'ash1' }, { name: { fullName: 'Ashish Singhal' } } ]

/* HOW TO COPY A OBJ DEEPLY */
//By looping over the obj using map
//By JSON.parse(JSON.stringify(obj));

//Rest operator
/* Spread syntax "expands" an array into its elements, 
while rest syntax collects multiple elements and "condenses" them into a single element. */

function sum(x,y, ...rest){
let sum = x+y;
rest.forEach( el =>
  sum=sum+ el 
);
return sum;
}
console.log("Sum is",sum(1,2,3,4,5)) //15