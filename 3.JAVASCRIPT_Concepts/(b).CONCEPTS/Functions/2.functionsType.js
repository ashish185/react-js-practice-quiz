/**
 * There are basically various function names.
 * Named Function
 * Anonymous Function
 * Callback Functions
 * Object Methods
 * Generators Functions
 */
/**
 * Resource: https://www.youtube.com/watch?v=ajTvmGxWQF8
 */

//* 1.Named Functions
function anyName(){
   //Ex 1: Factory Function
   return {}
}

function Person(name){
   //Ex2 Constructor Function
   this.name = name;
}

//* 2.Anonymous Function
function(){

}

/** 
 ** What does it mean?
 *  It means you are assigning a anonymous function to a variable.
 */
const sayHello = function(){
   return 'Hello';
}

//* 3. Callback Functions: when you are sending a function as a argument. 
setTimeout(() => {
   //setTimeOut first argument is Callback Function.
}, timeout);


//*4. Object Methods
const obj = {
   getName: function(){
      
   }
}