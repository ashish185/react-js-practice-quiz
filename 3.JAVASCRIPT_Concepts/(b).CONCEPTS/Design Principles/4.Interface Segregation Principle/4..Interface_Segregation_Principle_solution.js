const getSalary={
  printSalary(){
   return `Salary is ${this.salary}`;
 }
}

class Person {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  printName(){
    return `Name is ${this.name}`;
  }

  // printSalary(){
  //   return `Salary is ${this.salary}`;
  // }
}

class Accountant extends Person {
    constructor(name, salary){
      super(name, salary)
    }
}


Object.assign(Accountant.prototype, getSalary);

class Student extends Person {
    constructor(name){
      super(name, 0)
    }
}

const account1 = new Accountant('Ramkishan', 10000);
console.log(account1.printName()); //Name is Ramkishan
console.log(account1.printSalary()); //Salary is 10000

const stud1 = new Student('Shubham', 0)
console.log(stud1.printName()); //Name is Shubham
// console.log(stud1.printSalary()); //Now we don't require it.
