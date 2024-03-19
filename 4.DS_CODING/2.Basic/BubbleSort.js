const sortedArr= [ 1, 3, 5, 6, 7 ];
const unsortedArr= [ 7,6,1,5,3];
let anySwapFlag=false;
function getBubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        console.log(i);
        for (let m = 0; m < arr.length - 1 - i; m++) {
            if (arr[m] > arr[m + 1]) {
                let temp = arr[m];
                arr[m] = arr[m + 1];
                arr[m + 1] = temp;
                anySwapFlag = true;
                return arr;
            }
        }
        /* if (!anySwapFlag) {
           return arr;
        } */
    }
    return arr
}

console.log(getBubbleSort(unsortedArr));