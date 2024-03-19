 /* For All Regular function call this is going to point winow object */
 const objx= {
     outer: function name(params) {
         console.log("outer",this); //this points to function
         function inner(params) {
             console.log("inner this",this); //this points to window obj
         }
         inner();//Regular function call
     }
 }
 objx.outer(); //outer
