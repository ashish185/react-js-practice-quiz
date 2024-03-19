
let prms= new Promise( (resolve, reject)=>{
    setTimeout(()=>resolve("data"),0);
});
/* console.log("promise se pehle");
prms.then(el=>{
    console.log(el);
})
console.log("promise se bad m"); */
/* promise se pehle
promise se bad m
data */
/*  */

async function demo(){
    const res= await prms;
    console.log(res);
}
console.log("Async await se pehle");
demo();
console.log("Async await se bad");
/* Async await se pehle
Async await se bad
data */