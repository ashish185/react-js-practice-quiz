
class Person{
    constructor(name){
        this.name=name;
        this.printArrowFunction =() =>{
            console.log(this.name);
        },
        this.printNormalBind= this.printNormalBind.bind(this)
        //this.printArrowBind= this.printArrowBind.bind(this)
    }
    printNormalFunction(){
        console.log(this.name);
    }
    printNormalBind(){
        console.log(this.name);
    }   
     //you can't use like this in there 
  /*   printArrowBind =() =>{
        console.log(this.name);
    } */
}
let p = new Person("Any Name");
p.printArrowFunction();
p.printNormalFunction();
const funTransf=p.printNormalFunction;
//funTransf(); //this becomes undefined
funTransf.call(p); //Sol of 26