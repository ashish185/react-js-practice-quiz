
// Promise.all(Promise.resolve(32), Promise.reject(42)).then((el) =>console.log("In then",el)).catch("In catch");

console.log("5"-"3"); //2
//check object is empty or not
const obj={};
Object.keys(obj).length ? console.log("Not Empty") : console.log("Empty");

/* Copy one object into another */
const target = { a:2, b:3,c:4};
const obj1 = {c:6,d:7};
const newObj = {...target,...obj1}; // Object.assign(target, source); //Overwrites C
console.log(newObj);//{a: 2, b: 3, c: 6, d: 7}

//---_____________________________________________________________________________
console.log("Scoping");

let xy=20;
if(true){   
    /* var xy=10; //give errorbecause Var hoist here */
    let xy=40; //40
    console.log(xy);
}
function xyz(){
    var xy =30; //As var is function scoped do not give error here
    console.log("xy1",xy); //30
}
xyz();
/* Reverse case Var outside of let inside*/
var xy1=20;
if(true){   
    /* var xy=10; //give errorbecause Var hoist here */
    let xy1=400; ///As xy1 has local scope
    console.log(xy1); //400
}
function xyz(){
    var xy1 =50; //As var is function scoped do not give error here
    console.log("xy1",xy1); //30
}
xyz();
/* in case of if block
    Summary 
    var - var allowed h
    let - var allowd nhi h //as it is hoist
    var - let allowd h
*/

