function Employee(name, empId, dept) {
  this.name = name;
  this.empId = empId;
  this.dept = dept;
  /*  this.printEmployeeDetails = function () {
     console.table('name-empId-dept', this.name, this.empId, this.dept);
   } */
}

Employee.prototype.printEmployeeDetails = function () {
  console.table('name-empId-dept', this.name, this.empId, this.dept);
}

function Programmer(name, empId, dept, skillsArr) {
  Employee.call(this, name, empId, dept);
  this.skills = skillsArr;
}
const emp = new Employee('ashish', 688586, 'Technical', ['React, Js, Html']);
console.log('Emp', emp);

const empWithProgrammer = new Programmer('ashish', 688586, 'Technical', ['React, Js, Html']);
Programmer.prototype = Object.create(Employee.prototype);
console.log('Emp obj', empWithProgrammer);
console.log('Emp obj func', empWithProgrammer.printEmployeeDetails());
/*
Programmer {
  name: 'ashish',
  empId: 688586,
  dept: 'Technical',
  printEmployeeDetails: [Function],
  skills: [ 'React, Js, Html' ]
}
*/

//TypeError [ERR_INVALID_ARG_TYPE]:
