const person = {
    name: 'Sahil',
    age: 23
};

//1. Give type object
const person2: object = {
    name: 'Sahil',
    age: 23
};

// console.log(person2.age); //Property 'age' does not exist on type 'object'

//2. Another way to handle it.
// Note ***: In type of object we use semi colon
const person3: { name: string; age: number } = {
    name: 'Sahil',
    age: 23
};
console.log(person3.age) //23

// 3. For ex Person4, wants to use same type.
const person4: { name: string; age: number } = {
    name: 'Sahil',
    age: 23
};







