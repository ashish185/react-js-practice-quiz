function Cuboid(){
    this.length = 20;
    this.breadth =30;
}
Cuboid.prototype.height = 10;

const d1 = new Cuboid();
//"Object.keys does not include prototypes keys"
console.log(Object.keys(d1)); //[ 'length', 'breadth' ]

//Whereas for in involves protoype keys
for(let key in d1){
    console.log("for in", key);
}
/* for in length
for in breadth
for in height */