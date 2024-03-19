//Closures are the best example of Modular designz
function check(){
    var x=20;
   return function(){
        return x;
    }
}
console.log(check()());
console.log(check.x);
