// Abstraction example 
//Abstraction which means representing essential features hiding the background detail


/*  Most of the OOP languages provide access modifiers to restrict the scope of a variable, 
but their are no such access modifiers in JavaScript but their 
are certain way by which we can restrict the scope of variable within the Class/Object. */

function person(fname,lname){ 
    let firstname = fname; 
    let lastname = lname; 
  //use functional expression
    let getDetails_noaccess = function(){ 
        return (`First name is: ${firstname} Last  
            name is: ${lastname}`); 
    } 
  
    this.getDetails_access = function(){ 
        return (`First name is: ${firstname}, Last  
            name is: ${lastname}`); 
    } 
} 
let person1 = new person('Mukul','Latiyan'); 
console.log(person1.firstname); //undefined
console.log(person1.getDetails_noaccess); //undefined
console.log(person1.getDetails_access()); //First name is: Mukul, Last name is: Latiyan

//Closures are also good example of Data abstractoin


class PersonClass{
   
    constructor(x,y) {
        this.x= x;
        this.y=y
    }
    getX(){
        return this.x;
    }
}
let pc= new PersonClass('1',2);
console.log(pc.y); //2
console.log(pc.getX()); //1