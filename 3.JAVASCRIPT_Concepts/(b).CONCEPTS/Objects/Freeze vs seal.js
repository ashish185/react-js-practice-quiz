const obj={
    prop1: "val1",
    prop2: "val2"
}
const obj2={
    prop1: "val1",
    prop2: "val2"
}
Object.freeze(obj);//Freeze niether allow property to delete nor modify
Object.seal(obj2); //Seal does not allow property to delete but modify

obj.prop1="val3";
obj2.prop1="val3";
console.log(obj); //{ prop1: 'val1', prop2: 'val2' }
console.log(obj2); //{ prop1: 'val3', prop2: 'val2' }

console.log(Object.isFrozen(obj)); //true
console.log(Object.isSealed(obj2)); //true

delete obj["prop1"];

console.log(obj);

delete obj2["prop1"]; //error nhi dega

console.log(obj2);