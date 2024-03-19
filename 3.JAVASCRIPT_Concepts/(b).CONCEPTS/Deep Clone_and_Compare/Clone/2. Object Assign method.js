const student = {
    name: 'Balwinder' //not a nested object
}
const clonedStudent = Object.assign({},student);
student.name = 'Balwinder Singh';
console.log("Orginal object", student);
console.log('Copy object', clonedStudent);

/* Orginal object { name: 'Balwinder Singh' }
Copy object { name: 'Balwinder' } */

console.log("___________________________________________________________________________________________________________");
const student2= {
    name: 'Bhavya',
    details: { rollNo: 1214185 , subjects: ["Maths","Ds"]}
}
const clonedStudent2 = Object.assign({},student2);
//Changing property of student2
student2.details.rollNo = 121486;
console.log("Orginal object", student2);
console.log('Copy object student2 nested', clonedStudent2);
/* Orginal object
 { name: 'Bhavya',
  details: { rollNo: 121486, subjects: [ 'Maths', 'Ds' ] }
 } */
/* Copy object student2 nested 
{
  name: 'Bhavya',
  details: { rollNo: 121486, subjects: [ 'Maths', 'Ds' ] }
}
*/