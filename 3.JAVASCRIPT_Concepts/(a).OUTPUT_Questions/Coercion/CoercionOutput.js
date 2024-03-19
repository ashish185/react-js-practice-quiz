if(""){
    console.log("true");
}
else{
    console.log("false"); //console.log("false");
}

console.log([]==0); //true 
if([]){
    console.log("[] true"); //[] true
}
else{
    console.log("[] false");
}

console.log("-----------------------------------Type Coercion refers-----------------------------------------");
/* Type Coercion refers to the process of automatic or 
implicit conversion of values from one data type to another. */
/* It can be INTEGER TO STRING, STRING TO INTEGER, BOOLEAN TO NUMBER OR IN EQUALITY OPERATOR */

const var1WithUndefined=undefined;
const varWith2AsString='2';
const varAsNull=null;
const varWithNumber= 5;
const varWithTrue = true;
class A {};

//Agar koi value string k sath + lgage k add ki jaye to JavaScript internal other type coercion krke VARIBALE ko STRING m bdal deta h
console.log(var1WithUndefined+'5');
console.log(varWith2AsString+'5');
console.log(varAsNull+'5');
console.log(varWithNumber+'5');
console.log(varWithTrue+'5');
console.log(A+'5');
console.log(+'5'); //It is also way to convert string into integer
/* 
undefined5
25
null5
55
true5
class A {}5
5 (it is number not string)
 */
 //Agar koi value NUMBER k sath '-' lgage k SUBSTRACT ki jaye to JavaScript internal other type coercion krke DATATYPE ko number m bdal deta h
 console.log('minus');
console.log(5-var1WithUndefined);//NaN
console.log(5-varWith2AsString); //3
console.log(5-varAsNull);    // NULL converts to zero but undefined not
console.log(5-varWithNumber);
console.log(5-varWithTrue); // True converts to 1
console.log(5-A); // NaN
console.log(-'5');

/* minus
app.js:126 NaN
app.js:127 3
app.js:128 5
app.js:129 0
app.js:130 4
app.js:131 NaN
-5 (as a number)
 */
console.log('plus with number');
console.log(var1WithUndefined+5); //Adding something with undefined gives NaN ***
console.log(varWith2AsString+5); //25 is string here
console.log(varAsNull+5); //5 Amazing it took null as zero *****
console.log(varWithNumber+5); //10 
console.log(varWithTrue+5); //6 it took true as 1 therefore 6 ****
console.log(A+5); //class A {}5

console.log('plus with greter than >');
console.log(var1WithUndefined>-1); //**********false
console.log(varWith2AsString>-1); //true
console.log(varAsNull>-1); //true
console.log(varWithNumber>-1); //true
console.log(varWithTrue>-1); //true
console.log(A+5)
//--------------------------------------TRUE FALSE---------------------------------------------------------

console.log(typeof undefined); //undefined
console.log(typeof null); //object

//truthy falsy
console.log([]==0); true
console.log(""==0); true

/* ************************IMPORTANTS */
console.log(NaN==0); //*** Aisa lgta h content nh h true dega mgar false
console.log(undefined==0); false
console.log(NaN==undefined); false
if([]){
    console.log("[]");
    if(""){
        console.log("Blank false");
    }
    if(NaN){
        console.log("NaN false");
    }
}

//Object is shi compare krta h

Object.is(NaN, NaN) //false
console.log("+0 === -0",+0 === -0); //true === Plus minus k Zero k case m shi kam nhi krta
console.log("Object.is(-0,+0)",Object.is(+0,-0)); //false
console.log(NaN === NaN); //**** false kmal h NaN Nan k equal nhi h
console.log("+1 === -1", +1===-1); //false
console.log(undefined === undefined); //true
console.log(null === null); //true

// /Promise.all(42, Promise.reject(42)).then(console.log("In then")).catch("In catch");

console.log("5"-"3"); //2