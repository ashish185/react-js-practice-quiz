/* 
Goal: To understand Valid syntax of function under object and
this Reference lost.
*/
const obj = {
    name :"123",
    //Without function keyword Valid Syntax
    getName(){
        return this.name;
    },
    //Key function pair valid Syntax
    genName3: function(){
        return this.name;
    },
    genName4: function(){
        return this.name;
    },
    genName5:() =>{
        console.log(this); //this is blank object here
        return this.name;
    }
    /* Wrong syntax need to map with : */
  /*   function getName(2){
        return this.name;
    } */
}

/* Since this is passed from calling object this is write */
console.log(obj.getName()); //123

const getNameCopy= obj.getName; 
//Here reference of this has been lost
/* Since this is passed from calling object this is write */
console.log(getNameCopy());//undefined
console.log(obj.genName5());


/* */
const { getName } = obj;
const obj2 = { name: 'This is another name', getName };
console.log(obj2.getName()); // this is another name
console.log(getName()); // undefined


/*Question*/

setTimeout(getName, 1000);
