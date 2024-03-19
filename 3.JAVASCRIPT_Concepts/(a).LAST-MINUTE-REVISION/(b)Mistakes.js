/* 
Fetch function. Dono k sath await lgana pdega
nhi to error aayegi
*/
1. const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await response.json();

1. document.querySelector('#parent'); //correct
   document.getQuerySelector('#parent'); //incorrect

2. <table> not <tabel>

3. module.exports= 
//  not export it is exports
 
4.
function myFunc(){
    this.a=10;
}
//putting name expression is not same putting function
/* myFunc.prototype= function print(){
    console.log(this.a);
}; */
myFunc.prototype.print = function (){
    console.log(this.a);
};
const obj2= new myFunc();       
obj2.print();

5.
const arr=[-1,-2,6,5];
//Asc -2,-1,5,6
//Sort method works In place ascending by default
 arr.sort();
console.log(arr); 
/* 
Expected: -2,-1,5,6
Output: -1,-2,6,5
*/

6. Array.isArray(); // na ki Array.is();

7. webpack.config.js file name hota h not webpack-config.js

8. document.querySelector('#listOfProducts').innerHTML= `<div></div>`
/* innerHTML m HTML is in CAPS not in small */