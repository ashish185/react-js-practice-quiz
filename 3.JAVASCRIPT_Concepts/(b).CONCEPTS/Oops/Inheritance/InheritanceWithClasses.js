/* It is a concept in which some property and methods of an Object is being used by another Object.
 Unlike most of the OOP languages where classes inherit classes, JavaScript Object inherits 
Object i.e. certain features (property and methods)of one object can be reused by other Objects.
https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/
*/
class Employee {
  /* Classes– Classes are blueprint of an Object. 
    A class can have many Object, because class is a template while Object
     are instances of the class or the concrete implementation.
 */

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
  /* Most of the OOP languages provide access modifiers to restrict the scope of a variable,
     but their are no such access modifiers in JavaScript but their are certain way by which 
     we can restrict the scope of variable within the Class/Object. */
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

//What is Encapsulation ?
/*Ans: Encapsulation – The process of wrapping property and function within a single unit 
is known as encapsulation
For ex: p1 is an object, we have wrap methods and properties
Sometimes encapsulation refers to hiding of data or data Abstraction
 which means representing essential features hiding the background detail.


*/
