/* Standard function redefines this scope which causes problem, sometimes this refers to calling object
sometimes it's Window object */

//Persona as a Class
class PersonWithClass{
    constructor(name){
        this.name=name;
    }
 
    printNormalFunction(){
        console.log("this results Before calling setTimeout",this.name); //Ashish
        setTimeout(function(){
            console.log(this.name) //undefined
            //here this bound to window object
            console.log("In setTimeout",this);
        },2000) 
    } 
    printNormalFunctionSolution(){
        console.log("this results Before calling setTimeout",this.name);
        setTimeout(function(){
            console.log(this.name) //this results Before calling setTimeout Ashish
            /* annonymous function/IIFE ye window object se hi call hote h */
            /* Normal func m this bound ho jata h jnha se call hua, so here it is bound to Window object */
            console.log("In setTimeout",this);
        }.bind(this),2000) //bind this to the function
    }   
    printNormalHavingArrowFunction(){
        console.log("Arrow this results Before calling setTimeout",this);
        setTimeout(()=>{ 
        console.log(this.name) //Ashish //Here this refers to the calling object
        console.log("Callback function as arrow function",this); // { name: 'Ashish' }
        },1000) 
    }
    demo(){
        const callBack = () => {
            console.log(this.name)
        }
        callBack();
    }
}
let p = new PersonWithClass("Ashish");

//p.printNormalFunction();
//p.printNormalFunctionSolution();
p.printNormalHavingArrowFunction();
/* p.printNormalHavingArrowFunction(); */  //undefined
/* Arrow this results Before calling setTimeout PersonWithClass { name: 'Any Name' }
Arrow this results After calling setTimeout PersonWithClass { name: 'Any Name' }
Any Name */

/* p.printNormalFunctionSolution();
p.demo(); */