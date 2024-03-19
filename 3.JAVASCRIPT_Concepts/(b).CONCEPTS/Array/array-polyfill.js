/* Polyfill of map */

const arr=[1,2,3,4];

console.log(arr.map((el,index) => el +1));

//map Polyfill
Array.prototype.myMap1 = function(callBackF ) {
    console.log("arr is", this);
    let newArr = [];
    for(let i=0;i<this.length;i++){
        newArr.push(callBackF(this[i],i,this));
    }
    return newArr
};
console.log(arr.myMap1(el=>el+2));

//Filter polyfill
Array.prototype.myFilter = function(callBackFunc ) {
    console.log("Filter arr is", this);
    let newArr=[]
    for(let i=0; i<this.length;i++){
       if(callBackFunc(this[i])){
            newArr.push(this[i]);
        }
    }
    return newArr;
}
console.log("My Filter arr",arr.myFilter(el=>el===4));


Array.prototype.myFilter1 = (callBackFunc ) => { //using arrow function
    console.log("Filter arr is", this);
    let newArr=[]
    for(let i=0; i<this.length;i++){
       if(callBackFunc(this[i])){
            newArr.push(this[i]);
        }
    }
    return newArr;
}
console.log("My Filter arr",arr.myFilter1(el=>el===4));//[]
