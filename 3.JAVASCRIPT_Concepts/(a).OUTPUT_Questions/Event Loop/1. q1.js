/* BY LOOKING AT CODE IT SEEMS THAT 
HELLO WILL PRINT TILL TWO SECONDS
 */
let a=true;

setTimeout(function(){
  a=false;   
}, 2000);

while(a){
    console.log('hello');
}
//OUTPUT
/* Infinite times Hello
While loop remains in call stack and setTime remains in event loop
Because of while Infinite while Loop setTimeOut never
gets chance to run. 
*/
/* Ref: Coding Blocks */