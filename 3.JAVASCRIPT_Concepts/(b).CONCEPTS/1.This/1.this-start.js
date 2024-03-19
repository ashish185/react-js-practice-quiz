/* This */
 /* For All Regular function call this is going to point winow object */
 var windowObject =this;
 var valueWithLet = "let1";
 var valueWithVarKeywd= "var1";
 const objx= {
    outer: function name(params) {
        let y=30;
        //normal function have binding to this but arrow function do not
        //here this points to calling object not window object
        console.log("outer",this, this.x, this.y); //outer {x: "20", outer: ƒ} 20 undefined
        console.log("outer",this===windowObject); ///outer false
        function inner(params) {
            console.log("inner this",this=== windowObject ); //this points to window obj //inner this true
            console.log("valueWithLet,valueWithVarKey", valueWithLet, valueWithVarKeywd); //valueWithLet,valueWithVarKeywd let1 var1
            console.log("valueWithLetAndThis,valueWithLetAndThis", this.valueWithLet, this.valueWithVarKeywd);
            //valueWithLetAndThis,valueWithLetAndThis let1 var1
        }
        inner();//Regular function call
    },
    x:"20"
}
objx.outer(); //outer


const obj= {
  x:20,
  y: function(){
    console.log(this);
    function z(){
      console.log(this); 
    }
    const arrow= ()=> {
      console.log(this); //This is obj context {x: 20, y: ƒ}
      const arrow2=()=> {
        console.log(this.x);
      }
      arrow2();
    }
    z();
    arrow();
  }
}

obj.y();