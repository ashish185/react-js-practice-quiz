/* 
prototype property of class constructor
_proto_ ibject prorety
__proto__ is the actual object that is used in the lookup chain to resolve methods, etc.
 prototype is the object that is used to build __proto__ when you create an object with new:
*/
let myObj = {
    name:'Ashish',
    city:'Noida',
    getDetails: function(){
        console.log("Name is "+ this.name+" City is "+ this.city);
    }
}
/* myObj.prototype.check = function (){
    console.log("Check");
}
myObj.check(); */

const childObj = {
    name:'Mukul'
}

childObj.__proto__ = myObj; //Here __proto__ is refering to myObj
childObj.getDetails();
childObj.prototype=myObj.prototype;
childObj.check();
/* So childObj will first look getDetails in their own object if not found then look
in myObj.if not found then lookin myObj proto  which is pointing to the Object class proto
 */
console.log(childObj.city);
