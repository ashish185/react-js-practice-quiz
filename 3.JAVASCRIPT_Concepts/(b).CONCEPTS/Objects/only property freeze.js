const obj={
    prop1:'x',
    prop2:'y'
}

Object.defineProperty(obj,"prop1",{
    writable:false
});
obj.prop1="x2";
console.log(obj); //{ prop1: 'x', prop2: 'y' }
