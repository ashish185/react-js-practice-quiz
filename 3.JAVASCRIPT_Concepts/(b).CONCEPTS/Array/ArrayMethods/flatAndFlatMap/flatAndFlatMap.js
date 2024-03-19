console.log('------------------------------- FLAT ---------------------------------------------------------');
//It works only with NODE v> 11
// const deepLevel2= [[[2]],[1]];
// //By default flat deep level is 1
// console.log("deep level", deepLevel2.flat()); //"deep level" [[2], 1]
// console.log("deep level", deepLevel2.flat(2)); //"deep level" [2, 1]

console.log('------------------------------- FLAT MAP ---------------------------------------------------------');
const arrayOfObjects= [
  { userId: 1, username: 'Tom', attributes: ['Nice', 'Cute'] },
  { userId: 2, username: 'Mike', attributes: ['Lovely'] },
]
//doing with Map
const tempArr=[];
console.log("Array of objects", arrayOfObjects.map( el =>
   tempArr.push(...el.attributes)
));
console.log("temp arr", tempArr); //[ 'Nice', 'Cute', 'Lovely' ]
  

console.log(arrayOfObjects.flatMap((x) => x.attributes)); // [ 'Nice', 'Cute' , 'Lovely' ] 


let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
arr1.flatMap(x => [[x * 2]]); // [[2], [4], [6], [8]] // It flattens the array only 1 level 