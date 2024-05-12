// function Employee(name, id) {
//   this.name = name;
//   this.id = id;
//   this.printName = function() {
//       console.log('printName', this.name);
//   };
// }

// Employee.prototype.printId = function() {
//   console.log('printId', this.id);
// };

// const emp1 = new Employee('Ashish', 688586);
// console.dir(emp1);
// emp1.printName();
// emp1.printId();

// console.log('Employee.prototype === emp1.__proto__', Employee.prototype === emp1.__proto__);

// function Developer(name, id, programmingLanguage) {
//   Employee.call(this, name, id);
//   this.programmingLanguage = programmingLanguage;
// }

// Developer.prototype = Object.create(Employee.prototype);
// Developer.prototype.constructor = Developer;

// Developer.prototype.printAllDetails = function() {
//   console.log('All Details are', this.name, this.id, this.programmingLanguage);
// };

// const developer1 = new Developer('Tarun Jain', 688587, 'Java');
// console.log('developer1', developer1);
// developer1.printName();
// developer1.printId();
// developer1.printAllDetails();


const stud = {
  name:'Ram',
  printName:function(rollNumber){
    console.log('Name is', this.name, rollNumber);
  }
}
stud.printName(1);

const stud2={
  name:'Kapil',
}
stud.printName.call(stud2);
stud.printName.bind(stud2,2)();

Function.prototype.myBind = function (...args){
    //pehla argument obj hoga
    console.log("hi", args);
    const secondArg = args.slice(1);
    const thisObj = this; //******Caution: agr inner function k andar this de dega na to closure nhi bnega. Hence this becomes undefined
    return function(funcArgs){
        const arr=[...secondArg,funcArgs]; //**********funct args last m rehna chiye */
        //this.apply(args[0],arr); ye tum try kroge na error dega because this lost ho gya hoga
        thisObj.apply(args[0],arr);
    }
}

stud.printName.myBind(stud2,2)();



