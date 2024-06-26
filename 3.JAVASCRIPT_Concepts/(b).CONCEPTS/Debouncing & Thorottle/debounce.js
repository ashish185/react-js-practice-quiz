/* 1: Throttling(frequency): Changes based on a time based frequency. (Button click repeatedly) 
 For example, it can be used using _.throttle lodash function
 2: Debouncing(inactivity): Debouncing is a technique used to limit the frequency at which a function is invoked. 
 Publish changes after a period of inactivity.
 For example, it can be used using _.debounce lodash function
*/
const getData = () => {
    console.log("Api hit");
}
const debounce = (cb, time) => {
    let id;
    return function () {
        clearTimeout(id)
        id = setTimeout(() => {
            cb();
        }, time);
    }
}

/* const myFunc=debounce(getData,300); */
const myFunc = debounce(getData, 3000);