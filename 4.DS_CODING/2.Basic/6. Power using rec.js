//X^Y
let x=2;
let y=3;

const fun=(a,b)=>{
	if(b===1){
  	return 1;
  }
  let val= fun(a,b-1);
  return val*a;
}
console.log(fun(x,y));
fun(5,3);

/* 
fun(5,3)
    return 125
        fun(5,2);  return 25
            fun(5,1); //return 5 base condi

 */