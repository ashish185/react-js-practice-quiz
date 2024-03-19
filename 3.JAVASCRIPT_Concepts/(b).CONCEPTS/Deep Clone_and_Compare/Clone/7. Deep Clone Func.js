/* Ref: https://www.youtube.com/watch?v=RTnPDmNIPkc&t=1234s */
const obj={
    prop1: 'val1',
    prop2:{ nestProp1: 'n1'},
    prop3:[ {nestProp3: ["val"] } ],
    prop4: undefined
}

function deepClone(obj){
    let clone = (obj instanceof Array ? [] : {});
    for (const key in obj) {
        
        if(obj[key] != null && typeof(obj[key]) === 'object'){
            let retVal= deepClone(obj[key]);
            clone[key]=retVal; 
        }
        else{
            clone[key]= obj[key];
        }
    }
    return clone;
}
let obj2 =deepClone(obj);
console.log(obj2);

/* _.cloneDeep(objects); LoadAsh method 
_.isEqual(a, b)
*/