const num=53214;
//4231 ->4321
//4123 -> 4321
//53214
const arr = [...num.toString()];
let indx1;
let indxToSwap;
let firstMax=null;
for(let pos=0; pos<arr.length; pos++){
    let max=Number.MIN_SAFE_INTEGER;
    for(let i=0; i<arr.length;i++){
        if(firstMax === null){
            if(arr[i]>max){
                max=arr[i];
                indx1=i;
            }
        }
        else{
            if(arr[i] <firstMax && arr[i]>max){
                max=arr[i];
                indx1=i;
            }
        }
    }
    firstMax=max;
    if(indx1 !== pos){
        let val=arr[pos];
        arr[pos] = firstMax;
        arr[indx1]=val;
        console.log(parseInt(arr.join("")));
        return parseInt(arr.join(""));
    }
}
