let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort();
console.log(numbers); //[ 0, 1, 10, 2, 20, 3, 30 ]

/* 
Output in not correct Why?
Actual: [ 0, 1, 10, 2, 20, 3, 30 ]
Expected: [ 0,  1,  2, 3, 10, 20, 30 ] (increasing order)
Q1: Why the output is so?
Because internally sort function har character ko String m convert krta h
then comparing their sequences of UTF-16 code units values.
Q.2: Why not Ascii?
Ascii m maximum sare characters store nhi hote, most commons punctuations, numbers and alphabets.
But data m to kaffi alg alg characters ho skte hzèbre
*/
/* Ascending order */
let numbers2 = [0, 1 , 2, 3, 10, 20, 30 ];
numbers2.sort((a, b) => a - b);
console.log(numbers2); //[ 0,  1,  2, 3, 10, 20, 30 ];