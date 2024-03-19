/* Spread syntax can be used when all elements(keys values pairs) from an object or array need to be included 
in a list of some kind.
*/

//It works fine with nested objects
const student = {
    name: 'Balwinder' //not a nested object
}
console.log("****************Shallow copy works fine with Spread operator*****************************");
const clonedStudent = { ...student };
//Changing property of student
student.name = 'Balwinder Singh';

console.log("Original object", student);
console.log('Copy object', clonedStudent);

/* Original object { name: 'Balwinder Singh' }
Copy object { name: 'Balwinder' } */

console.log("****************For a nested object*****************************");
const student2= {
    name: 'Bhavya',
    details: { rollNo: 1214185 , subjects: ["Maths","Ds"]}
}
const clonedStudent2 = {...student2};
//Changing property of student2
student2.details.rollNo = 121486;
console.log("Original object", student2);
console.log('Copy object student2 nested', clonedStudent2);

/* Original object
 { name: 'Bhavya',
  details: { rollNo: 121486, subjects: [ 'Maths', 'Ds' ] }
 } */
/* Copy object student2 nested 
{
  name: 'Bhavya',
  details: { rollNo: 121486, subjects: [ 'Maths', 'Ds' ] }
}
*/