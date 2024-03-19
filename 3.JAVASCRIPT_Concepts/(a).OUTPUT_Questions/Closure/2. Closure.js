for(var i=0;i<5;i++){
    let id = setTimeout(() => {
        console.log("SetTimeout",i);
    }, 100);
    console.log("id",id);
}
console.log("out",i);
//5 times id
//out 5
/* SetTimeout 5
SetTimeout 5
SetTimeout 5
SetTimeout 5
SetTimeout 5 */