//1. By using Object literal
const x = {};
x.name = 'Any name';
console.log(x.name); //

//2. By using Object constructor
const obj = new Object();
obj.roll = '1214185';
console.log(obj.roll);

//3. By using Constructors:  provides a template for creation of objects 
function Person(address) {
    this.address = address;
}

let prsn = new Person('xyz rohtak');
console.log(prsn.address); //xyz rohtak

class Person2 {
    constructor(address2) {
        this.address2 = address2;
    }
}
let p2 = new Person2("city");
console.log("by using class", p2.address2);//by using class city

//4. By using Object.create() method
const myPrototype = {
    name: 'x',
    setName: function (newName) {
        this.name = newName;
    }
}

let myObjWithProtoTypeOnly = Object.create(myPrototype);
console.log("my obj Object.create(myPrototype) -", myObjWithProtoTypeOnly); //{}
myObjWithProtoTypeOnly.setName('Ash');
console.log("myObjWithProtoTypeOnly.name -", myObjWithProtoTypeOnly.name); //myObjWithProtoTypeOnly.name - Ash

//This will create a new object does not change older object
let myObject = Object.create(myPrototype);
myObject.name = 'Ashish';
// using method of myPrototype
myObject.setName('Ashish Singhal');
console.log("myObject", myObject);
//Output as {name: "Ashish Singhal"}
// If we open this Object
/* name: "Ashish Singhal"
__proto__:
setName: ƒ (newName)
__proto__: Object */

/* Another way to create object withPropType is*/
const withoutWritable = Object.create(myPrototype, { name: { value: 'Ravi' } });
console.log("withoutWritable", withoutWritable); //Oops.js:42 withoutWritable {name: "Ravi"}
withoutWritable.setName('Ravi Singhal'); // It will not change name even we use SetName
console.log("withoutWritable", withoutWritable);

const withWritable = Object.create(myPrototype, { name: { value: 'Vipin', writable: true } });
console.log("withoutWritable", withWritable); //Oops.js:42 withWritable {name: "Ravi"}
withWritable.setName('Vipin Bansal'); // It will not change name even we use SetName
console.log("withoutWritable", withWritable);

/*Object seal() vs freeze()
seal():Object.seal() prevents from deletion of existing properties but cannot prevent them fro
m external changes.
freeze(): makes an object immune to everything even little changes cannot be made
seal update krne deta h but delete nhi 
freeze na hi update krne deta na hi freeze
*/
var obj3 = {
    // assigns 10 to value  
    value: 10
};
// creates a non-extensible object 
Object.freeze(obj3);
// updates the value 
obj3.value = 20;
// but cannot change the existing value 
console.log(obj3.value);  //10 not 20

delete obj3.value
console.log(obj3.value); //10 it's because of freeze it 

/* If you want to just change the key  */
console.log("-----------------------------------------------------");
const anyObject2 = {
    name: 'Bob',
    id: 1
}
Object.defineProperty(anyObject2, "name", {
    enumerable: false
});

for (let key in anyObject2) {
    console.log(key);
}
