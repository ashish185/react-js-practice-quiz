//How to make something asyncronous 
//Check that MicroTask Queue in Event loop
//Here working normally

setTimeout(()=>{console.log("I am setTimeout");},0);
async function check(){
    let str="ASYNC"
    for(let i=0;i<1;i++){
        str+=i;
    }
    return str;
}

let p = new Promise((resolve,reject) => {
    let str ="Promise";
    for(let i=0;i<10;i++){
        str+=i;
    }
    resolve(str)
})
console.log(check());
check().then(el => console.log(el));
p.then(el => console.log(el))
console.log("hi");

//Promise { 'ASYNC0' }
// hi
//ASYNC0
//Promise0123456789
//I am setTimeout