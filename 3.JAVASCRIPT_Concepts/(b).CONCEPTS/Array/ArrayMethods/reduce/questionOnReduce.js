/* Remove a from the string using reduce */
//Input
let myString="DC comics are good, marvel comics are also good";
//Output
// DC comics re good, mrvel comics re lso good

const arr=[...myString];

const y = arr.reduce((ac,curr) => {
    if(curr !=='a' ){
        return ac+curr;
    }
    return ac;
},"");
console.log(y);