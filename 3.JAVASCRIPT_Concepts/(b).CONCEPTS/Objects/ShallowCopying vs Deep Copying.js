/* Shallow Copying vs Deep Copying
A deep copying means that value of the new variable is disconnected from the original variable 
while a shallow copy means that some values are still connected to the original variable
*/
// There are 3 ways to clone a object in Javascript
/* 
1) assign
2) Using Spread operator
3) Using JSON.parson(JSON.strigify)
 */

const student = {};
student.name = 'Arpit';

const copyStudent = student;
copyStudent.name = 'Arpit Khurana';
console.log("Orginal object", student);
console.log('Copy object', copyStudent);
// If orginal object changes it wil change copied object and vice versa
/* Orginal Student { name: 'Arpit Khurana' }
Copy object { name: 'Arpit Khurana' } */

console.log("___________________Using Object.assign______________");
const student1 = {
    name: 'Ashish' //not a nested object
}

const copyStudent1 = Object.assign({}, student1);
student1.name = 'Ashish Singhal';
console.log("Orginal object", student1);
console.log('Copy object', copyStudent1);
/* 
Orginal object { name: 'Ashish Singhal' }
Copy object { name: 'Ashish' }
 */
//HERE IF ORGINAL OBJECTS CHANGE IT DOES NOT IMPACT OTHER OBJECT
console.log("___________________Using spread operator______________");

//Object is changed
/* 
Copyied object with spread operator 
{ 
  name: 'Bhavya',
  details: { rollNo: 121486, subjects: [ 'Maths', 'Ds' ] }
}
*/
console.log("Copyied object with Object assign", copyStudent3WithAssign);
/* 
Copyied object with Object assign 
{ 
  name: 'Bhavya',
  details: { rollNo: 121486, subjects: [ 'Maths', 'Ds' ] } 
}
*/

//JSON Stringify helps in achieving DEEP copying
console.log("Copyied object with JSON strigify", copyObjectWithJsonStrigify);
/*
Copyied object with JSON strigify
 { name: 'Bhavya',
  details: { rollNo: 1214185, subjects: [ 'Maths', 'Ds' ] }
 } 
 */
// However JSON stringify it does now work correctly with some data types
const nameUndefined={ name: undefined };
const nameWithSymbol= { name: Symbol()};
const keyStringValUndefined = { "name": undefined};
const withValAsFunc = { name: function(){}};
console.log(JSON.stringify(nameUndefined)); // {}
console.log(JSON.stringify(nameWithSymbol)); //{}
console.log(JSON.stringify(keyStringValUndefined)); //{}
console.log(JSON.stringify(withValAsFunc));//{}

const withNan = { name: NaN};
console.log(JSON.stringify(withNan)); //{"name":null}
console.log(JSON.stringify({ key: Infinity })); //{"key":null}

const withDate = { date: new Date()};
console.log("Type of date:", typeof(withDate));

console.log("Initial",withDate); //{ date: 2020-11-27T17:05:17.947Z }-.0

const objAfterCloneWithJSon =JSON.parse(JSON.stringify(withDate)); 
console.log(objAfterCloneWithJSon);//{ date: '2020-11-27T17:05:17.947Z' } //So the type of date is changed from object to String //

/* loadash clone metod gives clone deep method for this */
/* 
https://www.youtube.com/watch?v=E3dboLSBeJc
https://medium.com/@pmzubar/why-json-parse-json-stringify-is-a-bad-practice-to-clone-an-object-in-javascript-b28ac5e36521
*/
