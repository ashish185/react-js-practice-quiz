/* Shallow Copying vs Deep Copying
A deep copying means that value of the new variable is disconnected from the original variable 
while a shallow copy means that some values are still connected to the original variable

A shallow copy means that certain (sub-)values are still connected to the original variable.
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
console.log("Original object", student);
console.log('Copy object', copyStudent);
// If original object changes it wil change copied object and vice versa
/* Original Student { name: 'Arpit Khurana' }
Copy object { name: 'Arpit Khurana' } */

console.log("___________________Using Object.assign______________");
// Task: Check if we use Object assign, and if we change in copies whether it changes the original object or not?
const student1 = {
    name: 'Ashish' //not a nested object
}

const copyStudent1 = Object.assign({}, student1);
student1.name = 'Ashish Singhal';
console.log("Original object", student1); //Original object changed, though it is assigned to new object
console.log('Copy object', copyStudent1);
/* 
Original object { name: 'Ashish Singhal' }
Copy object { name: 'Ashish' }
 */
//Conclusion: HERE IF ORGINAL OBJECTS CHANGE IT DOES NOT IMPACT OTHER OBJECT
console.log("___________________Using spread operator______________");

const originalObj={ 
  name: 'Bhavya',
  details: { rollNo: 121486, subjects: [ 'Maths', 'Ds' ] }
};

//Does original object changes?
const newObj={ ...originalObj};
newObj.name='Ashish';

// It does not change the original since it is not the nested key
console.log(originalObj); //{name: "Ashish", details: {...}}
console.log(newObj); // {name: "Bhavya", details: {...}}

const newObj2={ ...originalObj};

newObj2.details.rollNo= 1214185;

//Does original object changes?
console.log(originalObj); //{ name: 'Bhavya', rollNo: 121485, subjects: [ 'Maths', 'Ds' ] }
console.log(newObj2);  
// It does change the original even we change the new object roll number
// Because roll number is nested, and spread operator does shallow copying.


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

console.log("Initial", withDate); //{ date: 2020-11-27T17:05:17.947Z }-.0

const objAfterCloneWithJSon =JSON.parse(JSON.stringify(withDate)); 
console.log(objAfterCloneWithJSon);//{ date: '2020-11-27T17:05:17.947Z' } //So the type of date is changed from object to String //

/* loadash clone metod gives clone deep method for this */
/* 
https://www.youtube.com/watch?v=E3dboLSBeJc
https://medium.com/@pmzubar/why-json-parse-json-stringify-is-a-bad-practice-to-clone-an-object-in-javascript-b28ac5e36521
*/
