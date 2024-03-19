/* There are some issues with JSON methods */

const anyObject = {
    prop1: 'Ash',
    prop2: undefined,
    prop3: null,
    prop4: function () { console.log(this.prop1); },
    prop5: { propDep1: "1" }
}
// console.log(JSON.stringify(anyObject)); /{"prop1":"Ash","prop3":null,"prop5":{"propDep1":"1"}}
const clonedAnyObject = JSON.parse(JSON.stringify(anyObject));
console.log("clonedAnyObject", anyObject);
//Ouputs
//Actual: clonedAnyObject { prop1: 'Ash', prop3: null, prop5: { propDep1: '1' } }
//Expected: anyObject { prop1:'Ash',prop2:undefined, prop3:null, prop4: function(){ console.log(this.prop1);},prop5: { propDep1:"1"}}

/* It is noticed that
 prop2: undefined, and prop4: function () { console.log(this.prop1); },
  LOST in ClonedOject.
 JSON.stringify do not parse certain dataTypes
*/

/* Issues:
1. undefined, symbol and function as a values not supported
2. propotypes do no copy
3. Descriptor issues
*/