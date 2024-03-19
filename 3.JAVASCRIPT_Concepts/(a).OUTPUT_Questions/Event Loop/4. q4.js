
console.log("1");
//Task queue
setTimeout(()=>console.log("I should run first"),0);

//Micro Task queue
let pm = new Promise((resolve, reject) => {
   resolve("But I run first")
});
pm.then(el => console.log(el));
console.log("4");

//output
// 1
// 4
// But I run first
// I should run first