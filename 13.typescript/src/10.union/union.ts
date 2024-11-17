type combineArgs = number | string;

/** Problem with above code is that suppose if we have multiple values in combine like
 * combine(1,2,3,4,5,6),
 * then we need to give below statement for all the args.
 *  if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
 * 
 */
function combine(a: combineArgs, b: combineArgs){
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return a.toString() + b.toString();
}

console.log(combine(1, 2)); //3
console.log(combine('Ashish', 'Singhal')); //AshishSinghal

/* 
Solutions literals
*/

function combine2(a: combineArgs, b: combineArgs, c: combineArgs, d: combineArgs, typeOfArgs: 'as-string' | 'as-number') {
    if (typeOfArgs === 'as-number') {
        return (+a) + (+b) + (+c) + (+d);
    }
    return a.toString() + b.toString();
}
console.log(combine2(1, 2, 3, 4, "as-number"));
console.log(combine2('Ashish', 'Singhal', 'x', 'y', 'as-string'));
