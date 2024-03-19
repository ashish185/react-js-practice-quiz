function Outer() {
    let a = 10;
    function inner() {
        var a=90;
        let b=100
        console.log("a:"+a,"b:"+b); //a:90 b:100
        ++a;
        ++b;
    //if a=30 the log give "a:30 b:20")
    }
    return inner; // Returning reference of the function which is also an object.
}
var innerCall = Outer(); 
innerCall(); //a:90 b:100
innerCall(); //a:90 b:100

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
innerCall2(); //a:30 b:20 //Hlaki b ki value bhi 30 kar di thi:  //It does not store value,it just take the reference*/

/*Closures with arrow function works fine  */
const OuterWithArrowFE = () => {
    var a = 10;
    const inner = () => {
      let b = 100;
      console.log("a:" + a, "b:" + b);
      ++a;
      ++b;
    };
    return inner; // Returning reference of the function which is also an object.
  };
  /* Compare output */
  OuterWithArrowFE()(); //a:10 b:100 /* Executes and over */
  OuterWithArrowFE()(); //a:10 b:100
  
  const callFunc = OuterWithArrowFE(); //Remains in memory
  callFunc();//a:10 b:100
  callFunc();//a:11 b:100
  