/* Closures */
function OuterA() {
    let a = 10;
    function innerA() {
        var b=20;
        console.log("a:"+a+" b:"+b); //cease the value of a not b
        //Changing value of a=30 and b=30
        a=30;
        b=30;
    }
    return innerA; // Returning reference of the function which is also an object.
}
var innerCall2 = OuterA(); 
innerCall2(); //a:10 b:20 
innerCall2(); //a:30 b:20 //

//Closure with this, Terminal window nhi multa kai bar
var a="45";
function OuterA1() {
    let a = 10;
    function innerA() {
        var b=20;
        console.log("check",a);
        (()=>{
            console.log("check2",this.a); //45 Points to window object
        })();
    }
    return innerA; // Returning reference of the function which is also an object.
}
let innerCall3 = OuterA1();
innerCall3(); 
