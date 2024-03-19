const obj={
	key1:[{'name':'Ash'}],
  key2:"anyVal",
  key3:{'val':10}
}

const cloneDeep = ( obj ) =>{
 let clone= (obj instanceof Array? [] : {});
	for(let key in obj){
  		if(obj[key]!=null && typeof(obj[key]) === 'object'){
      	let val= cloneDeep(obj[key]);
        clone[key]= val;
      }
      else{
      	clone[key]= obj[key];
      }
  }
  return clone;
}
let obj2= cloneDeep(obj);
let obj3= deepClone(obj);
console.log(obj2);
console.log(obj3);

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