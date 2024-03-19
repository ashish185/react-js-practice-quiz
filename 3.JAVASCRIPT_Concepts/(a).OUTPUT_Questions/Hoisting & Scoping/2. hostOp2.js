let x=20;
function fun(){
    //x wil be first search in lexical scope
    if(x>20){
        var x;
    }
    console.log(x); //Undefined not 20
}
fun();
function fun2(){
    console.log(x); //Undefined not 40
    var x=40;
}
fun2();

function fun3(){
    console.log(x); //20
}
fun3();