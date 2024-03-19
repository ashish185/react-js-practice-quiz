function myFunc(){
    this.a=10;
}
myFunc.prototype.print = function (){
    console.log(this.a);
};
const obj2= new myFunc();       
/* obj2.print(); */

function deepClone(obj){
    let clone = (obj instanceof Array ? [] : {});
    for (const key in obj) {
        //we don't use key we use obj[key]
        if(obj[key] != null && typeof(obj[key]) === 'object'){
            let retVal= deepClone(obj[key]);
            clone[key]=retVal; 
            //Don't do clone.key
        }
        else{
            clone[key]= obj[key];
        }
    }
    return clone;
}
let clonedobj=deepClone(obj2);
console.log(obj2);
console.log(clonedobj); /* Ye print function m hi aa gya Esse proto k andar hona chiye tha */
clonedobj.print();