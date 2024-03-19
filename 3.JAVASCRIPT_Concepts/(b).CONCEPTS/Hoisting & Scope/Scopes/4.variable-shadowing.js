/* 
Variable shadowing occurs when a variable of an inner scope is defined with the
same name as a variable in the outer scope. In the inner scope, both variables’ scope overlap.
 */
var a=20;
{
    var a=30; //Inner variable has same name as outer variable and they both have scope i.e Global
    console.log(a); //30
}
console.log(a); //30