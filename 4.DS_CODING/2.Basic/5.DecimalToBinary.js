//find second largest element in array
const getSecondLargest = (arr) => {
    let firstLarge=arr[0];
let secondLarge=arr[0];

for(let i=1; i< arr.length;i++){
    if(arr[i]>firstLarge){
      firstLarge=arr[i];
  }
}
for(let i=1; i< arr.length;i++){
    if(arr[i]!== firstLarge){
      if(arr[i]>secondLarge){
        secondLarge=arr[i];
      }
  }   
}
console.log(secondLarge);
}

const arr=[34, 45, 13, 12, 11, 99, 100, 98];
getSecondLargest(arr);
