/* 
Fetch function. Dono k sath await lgana pdega
nhi to error aayegi
*/
/* 1. How to call fetch function */
const response = await fetch('https://jsonplaceholder.typicode.com/users');
const data = await response.json();

/* 2. How to call fetch function */
   document.querySelector('#parent'); //correct
   document.getQuerySelector('#parent'); //incorrect

/* 3. Spelling of table */
//    <table> not <tabel>

/* 4. There could be multiple items to export therefore it exports, not export  */
module.exports= 
 
//5. if you want to put it into function prototype then assign it like below but not directly
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

/* 6. Sort method uses In place algorithm */
const arr=[-1,-2,6,5];
//Asc -2,-1,5,6
//Sort method works In place ascending by default
 arr.sort();
console.log(arr); 
/* 
Expected: -2,-1,5,6
Output: -1,-2,6,5
*/

/* 7. How to check whether input is array?
since typeof [] is object not array?
use  Array.isArray() method.
not Array.is();
*/
Array.isArray(); // na ki Array.is();

/* 8. Webpack.config.js file name hota h not webpack-config.js*/

/* 9. Inner HTML method where HTML is in capitals */
document.querySelector('#listOfProducts').innerHTML= `<div></div>`

/* 10. Map method */
const mp= new Map();
mp.set('1', 'ash')
mp.set('2', 'ash2')
mp.set('3', 'ash3')

//10. To notice that with Map and ForEach, in it's callback it gives value and key.
mp.forEach( (val,key) => console.log("for each(val,key)",key,val))

console.log(mp.get(1));

//11. Never try to use Arrow function while explaining prototype inheritance

11. <style> tag k andar css rkhte h or ye <head/> m hota 
12. external css in <link rel="stylesheet" href="styles.css">