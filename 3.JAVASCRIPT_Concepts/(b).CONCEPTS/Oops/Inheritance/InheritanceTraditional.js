console.log("-----------------Inheritance Traditional way in JS---------------");
// Inheritance used to attain reusability
/* https://www.youtube.com/watch?v=azTgmrQaYl0&list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL&index=30 */
//For ex
/* 
What is prototype?
Ans: JavaScript is a prototype based language, so, whenever 
we create a function using JavaScript, JavaScript engine adds a
prototype property inside a function
Prototype property is basically an object (also known as Prototype object),
where we can attach methods and properties in a prototype object,
 which enables all the other objects to inherit these methods and property
*/
function Employee(firstName, salary, department){
    this.firstName =  firstName;
    this.salary = salary;
    this.department = department
}

// here prototype is being used with constructor
Employee.prototype.getFirstName = function () {
    return `First name: ${this.firstName}`
}

let financeEmp1 =  new Employee('Praveen', 50000, 'Finance');
/*
So two objects of Employee forms
1) Employee
2) Employee.prototype pointed by Employee prototype property 

finacae emp1 has __proto__ pointing to the Employee.prototype
 */
console.log('Finance employee', financeEmp1); //Finance employee Employee 
/* { firstName: 'Praveen', salary: 50000, department: 'Finance' } */

console.log('First name',financeEmp1.firstName); //Praveen
/* 
finaceEmp1 will look for firstName in own it. It will get & print it
*/

console.log('First name',financeEmp1.getFirstName()); 
//First name First name: Praveen

//Now suppose a company want to take record of Programmer Lang along with basic details then 
// in that case, Inherits it.

//create constructor first
function Programmer(firstName, salary, department, pl){
    Employee.call(this, firstName, salary, department); //It calls the constructor of Employee
    //Generally obj1.methodName.call((obj2)
    this.pl = pl;
}

//Inherits the prototype
/* Programmer.prototype = Object.create(Employee.prototype); */

let pgObj = new Programmer('Mukul', 50000, 'CSE', 'C');
/* 
When new keyword encounters with function name So two objects of Programmer forms
1) Programmer
2) Programmer.prototype pointed by Programmer prototype property 
after it
3)pgObj takes in memory having 'Mukul', 50000, 'CSE', 'C'
pgObj emp1 has __proto__ pointing to the Programmer.prototype
*/

console.log(pgObj); 
console.log(pgObj.firstName); //Mukul
console.log(pgObj.salary); //50000
console.log(pgObj.department); //CSE
console.log(pgObj.pl); //C
/* console.log(pgObj.getFirstName());  *///TypeError: pgObj.getFirstName is not a function

function Programmer2(firstName, salary, department, pl){
    Employee.call(this, firstName, salary, department); //It calls the constructor of Employee
    //Generally obj1.methodName.call((obj2)
    this.pl = pl;
}

//Inherits the Employee prototype
Programmer2.prototype = Object.create(Employee.prototype); 

let pgObj2 = new Programmer2('Ashish', 40000, 'CSE', 'Java');
console.log(pgObj2.getFirstName()); //First name: Ashish

//It's good practice as __proto__ was pointing to Employee constr
Programmer2.prototype.constructor = Programmer
