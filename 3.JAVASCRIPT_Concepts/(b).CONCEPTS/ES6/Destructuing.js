/* The destructuring assignment syntax is a JavaScript expression that makes
 it possible to unpack values from arrays, or properties from objects, into distinct variables. 
 Note: 
 // SyntaxError: rest element may not have a trailing comma
// Always consider using rest operator as the last element
*/
console.log("----------------------Array Destructuring----------------------");
 let [a,b,...rest] =  [1,2,3,4,5];
 console.log(a,b,rest); //1 2 [ 3, 4, 5 ]

 let [e,,g,h] = [1,2,3];
 console.log(e,g,h); //1 3 undefined
 console.log("----------------------Object Destructuring----------------------");

 const people = {
      name1: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
} 

const {name1,family,...rest2} = people
console.log(name1); //Mike Smith
console.log(family); /* 
{ mother: 'Jane Smith',
father: 'Harry Smith',
sister: 'Samantha Smith' } */
console.log(rest2); //{ age: 35 }

//Suppose I want to use name1 with another name
const {name1: newName} = people
console.log(newName); //Mike Smith

//How to work with nested object
// I want to unpack value from nested object family
const {family: {mother}} = people
console.log("mother",mother);//Jane Smith
console.log("family",family); /* family { mother: 'Jane Smith',
father: 'Harry Smith',
sister: 'Samantha Smith' } */

const {family: {mother: newMotherName}} = people
console.log(newMotherName);  ////Jane Smith

//Right syntax for already destrured value
// not let {a,b} = { a:1,b:2}
function xyz({a,b} = { a:1,b:2}){
    console.log(a,b);
}
xyz(); //1 2