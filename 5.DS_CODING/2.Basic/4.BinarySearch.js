/* Whenever the input is given as sorted.
    The idea come to our mind is that
    here Binary search can be applied.
*/

const evenArr=[11,12,13,14,15,16,17,18,19,20];
// mid =0+9/2 = 4


const oddArr=[11,12,13,14,15,16,17,18,19,20,21];


const getIndexUsingBinarySerach = (item, arr) =>{
    let start=0;
    let end = arr.length-1;
    while(start<=end){
        let mid = parseInt((start+end)/2);
        if(item=== arr[mid]){
            return mid;
        }
        else if(item < arr[mid]) {
            end=mid-1
        }
        else if(item>arr[mid]){
            start = mid+1;
        }
    }
}
/* console.log(getIndexUsingBinarySerach(19,evenArr)); */
console.log(getIndexUsingBinarySerach(19,oddArr));


