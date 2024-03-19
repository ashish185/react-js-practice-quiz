/**
 * Learning: Reference of this lost.
 * Exceptions: In node we have to write global instead of Window
 */
//case: 1: 
console.log('--------------------------Case 1----------------------');
const obj = {
    name :"123", 
    getName(){
        console.log('is this Belongs to window',this === global); //true
        return this.name;
    }
}

const getNameCopy= obj.getName; 
//Here reference of this has been lost
/* Since this is passed from calling object this is write */
console.log(getNameCopy());//undefined


console.log('--------------------------Case 2----------------------');
//Case2: I want to call name on obj2
console.log(getNameCopy.call(obj)); 
/**
 * Outputs
 * is this Belongs to window false
 * 123
 */

console.log('--------------------------Case 3----------------------');
//Case: Changing the scope, putting the reference of function of obj i.e getName to Obj2
// This states that case2, case 3 is same, in Case 2 we are binding the obj with getName
const obj2={
    name :"name_Of_obj2",
    getNameCopy
};
console.log(obj2.getNameCopy()); //name_Of_obj2
//Note: above function getName2 will not 

console.log('--------------------------Case 4----------------------');
const obj3 = {
    name3 :"123", 
    getName(){
        return this.name3;
    }
}
var name3='name from var';
console.log(obj3.getName()); //name_Of_obj2

console.log('--------------------------Case 5----------------------');
const obj4 = {
    name4 :"123", 
    getName4(){
        return this.name4;
    }
};

var {getName4} = obj4;

var name4='name from var';
// const getName4 = obj4.getName;
console.log('val = ', getName4()); //'name from var'