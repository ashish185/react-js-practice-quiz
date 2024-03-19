const anyObject={
    name:'Bob',
    id:1
}
console.log("Intial obj", anyObject);
// Object.defineProperty(obj, prop, descriptor):
// It allows us to control all the properties of object
Object.defineProperty(anyObject,"name",{
    writable:false
});
anyObject.name = 'Kesh';

console.log("After change", anyObject);
/*
Intial obj { name: 'Bob', id: 1 }
Intial obj { name: 'Bob', id: 1 }
*/
for(let key in anyObject){
    console.log(key);
}
/* 
name
id 
*/
console.log("-----------------------------------------------------");
const anyObject2={
    name:'Bob',
    id:1
}
Object.defineProperty(anyObject2,"name",{
    enumerable:false
});
for(let key in anyObject2){
    console.log(key);
}
/* id */