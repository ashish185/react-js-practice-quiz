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

9. 
const mp= new Map();
mp.set('1', 'ash')
mp.set('2', 'ash2')
mp.set('3', 'ash3')

//this is wrong
hm.forEach( (val,key) => console.log("for each(val,key)",key,val))

console.log(mp.get(1));

10. Never try to use Arrow function while explaining prototype inheritance

11. <style> tag k andar css rkhte h or ye <head/> m hota 
12. external css in <link rel="stylesheet" href="styles.css">