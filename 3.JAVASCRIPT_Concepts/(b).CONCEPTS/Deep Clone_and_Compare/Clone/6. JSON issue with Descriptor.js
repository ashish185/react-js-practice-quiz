/* There are some issues with JSON methods */

const anyObject = {
    prop1: 'Ash',
    prop2: undefined,
    prop3: null,
    prop4: function () { console.log(this.prop1); },
    prop5: { propDep1: "1" }
}

Object.defineProperty(anyObject,"prop1",{
    writable: false
})

const clonedAnyObject = JSON.parse(JSON.stringify(anyObject));
anyObject.prop1="Kumar";
clonedAnyObject.prop1="Kumar";
console.log("anyObject.prop1",anyObject.prop1); //Ash
console.log("clonedAnyObject.prop1", clonedAnyObject.prop1); //Kumar
/* Note:
On Cloning with JSON.strigify property descriptor not works
*/