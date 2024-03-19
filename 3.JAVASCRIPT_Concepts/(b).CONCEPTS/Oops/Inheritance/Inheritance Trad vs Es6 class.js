function Employee1(name, empId, department) {
  // these are the properties of an object
  this.name1 = name;
  this.empId1 = empId;
  this.department1 = department;
}
Employee1.prototype.getFirstName1 = function () {
  return `First name: ${this.name1}`;
};

function Programmer1(name, empId, department, programmingLanguage){
    Employee1.call(this, name, empId, department);
    this.programmingLanguage1 = programmingLanguage;
}
//To use the Employee1 prototypes Inherits the protoptye
Programmer1.prototype = Object.create(Employee1.prototype);

let programmer1 = new Programmer1('Mukul',688587,'Axway','Java');
console.log("Tradtional programmer object ", programmer1);
/* Tradtional programmer object  Employee1 {
  name1: 'Mukul',
  empId1: 688587,
  department1: 'Axway',
  programmingLanguage1: 'Java'
 } 
 */
console.log(programmer1.getFirstName1()); //First name: Mukul


class Employee {
  constructor(name, empId, department) {
    // these are the properties of an object
    this.name = name;
    this.empId = empId;
    this.department = department;
  }
  getDepartment() {
    return `Department is ${this.department}`;
  }
  getEmployeID() {
    return this.empId;
  }
  toString() {
    return (
      `Employee name is ${this.name}` +
      `, having Employee id is ${this.empId}` +
      ` working in ${this.department}`
    );
  }
}
class Programmer extends Employee {
  //super is used to call parent's constructor
  //In java instead of constructor we use class name
  constructor(name, empId, department, programmingLanguage) {
    super(name, empId, department);
    this.programmingLanguage = programmingLanguage;
  }
  //method overiding
  toString() {
    return `Employee name is ${this.name}, having Employee id is ${this.empId}
        working in ${this.department} knows Programming languange ${this.programmingLanguage}`;
  }
  //(property and methods)of one object can be reused by other Objects.
  getName() {
    //using Parent's varible
    return "Programmer name is " + this.name;
  }
  getEmpID() {
    //using Parent's method
    return "Programmer Empl id is " + super.getEmployeID();
  }
}

let p1 = new Programmer("Ashish", 688586, "Axway", "JavaScript");
console.log(p1.getDepartment()); //Department is Axway
console.log(p1.toString()); //Employee name is Ashish, having Employee id is 688586 working in Axway knows Programming languange JavaScript
console.log(p1.getName()); //Programmer name is Ashish
console.log(p1.getEmpID()); //Programmer Empl id is 688586

//
