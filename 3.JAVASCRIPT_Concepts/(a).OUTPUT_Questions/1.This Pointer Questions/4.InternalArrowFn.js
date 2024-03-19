//InternalArrow func
var windowObject =this;
var valueWithLet = "let1";
var valueWithVarKeywd= "var1";
const objx2= {
    outer: function name(params) {
        let y=30;
        //normal function have binding to this but arrow function do not
        //here this points to calling object not window object
        console.log("outer",this, this.x, this.y); //outer {x: "20", outer: ƒ} 20 undefined
        console.log("outer",this===windowObject); ///outer false
        const inner = (params)  =>{ //"<- Arrow function does not have their this"
            console.log("inner this",this=== windowObject ); //False
            console.log("valueWithLet,valueWithVarKeywd", valueWithLet, valueWithVarKeywd); //valueWithLet,valueWithVarKeywd let1 var1
            console.log("valueWithLetAndThis,valueWithLetAndThis", this.valueWithLet, this.valueWithVarKeywd,this.y,y);
            //valueWithLetAndThis,valueWithLetAndThis undefined undefined 
        }
        inner();//Regular function call
    },
    x:"20"
}
objx2.outer();