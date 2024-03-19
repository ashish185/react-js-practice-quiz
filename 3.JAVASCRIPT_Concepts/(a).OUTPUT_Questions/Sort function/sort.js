/* Sort method first covert into string then  */
//IT takes UTF-16 (having Emoticons also)
const arr=[7,-1,2,-9];
arr.sort();
console.log(arr);
//Ouptput: [ -1, -9, 2, 7 ]
//Expected: [-9,-1,2,7]

const arr2=[7,-1,2,-9];
arr2.sort((a,b)=> a-b);
console.log(arr2);// [ -9, -1, 2, 7 ]

//Comparator function
function mySort(a,b){
    if(a>b){
        /* Aise yad rkho ki a>b se bda h then swap hoga return 1 */
        return 1;
    }
    else if(b>a){
        return -1;
    }
    return 0;
}
const arr3=[7,-1,2,-9];
arr3.sort(mySort);
console.log(arr3); //[ -9, -1, 2, 7 ]
/* 
Learn:

*/