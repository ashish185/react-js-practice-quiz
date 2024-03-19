// To get the Ascii value of any character is JS by using charCodeAt
console.log('c','cZt'.charCodeAt(1));
/* a-97 z-122 , A-65 Z-90*/

/* Since Sort internally converts numbers to string then it should correctly sort (i),
   But it does not help in case of Problem1 and Problem2
*/

//(i)
let animals = [
    'cat', 'dog', 'elephant', 'bee', 'ant'
];
animals.sort();

let animals2 = [
    'cat', 'dog', 'elephant', 'bee', 'ant'
];
animals2.sort((a, b) => b-a);
console.log('animals2', animals2);
//As Expected
console.log(animals);//[ 'ant', 'bee', 'cat', 'dog', 'elephant' ]

/* --------------------Problem:1--------------- */
//When start with Caps
let mixedCaseAnimals = [
    'Cat', 'dog', 'Elephant', 'bee', 'ant'
];
mixedCaseAnimals.sort()
console.log("mixedCaseAnimals",mixedCaseAnimals);
/*Actual: mixedCaseAnimals [ 'Cat', 'Elephant', 'ant', 'bee', 'dog' ] */

/* --------------------Solution:1-------------------- */
let mixedCaseAnimalsSol = [
    'Cat', 'dog', 'Elephant', 'bee', 'ant'
];

mixedCaseAnimalsSol.sort(function (a, b) {
    let x = a.toUpperCase(),
        y = b.toUpperCase();
    return x == y ? 0 : x > y ? 1 : -1;

});
console.log("mixedCaseAnimalsSol",mixedCaseAnimalsSol); //[ 'ant', 'bee', 'Cat', 'dog', 'Elephant' ]


/* --------------------Problem:2--------------- */
//Sorting an array of strings with non-ASCII characters.
let nonAsciiCharacters = ['zèbre', 'abeille', 'écureuil', 'chat'];
nonAsciiCharacters.sort();

console.log(nonAsciiCharacters);
/* 
Output-
Actual: [ 'abeille', 'chat', 'zèbre', 'écureuil' ]
Expected: [ 'abeille', 'chat', 'écureuil', 'zèbre' ]
*/

let nonAsciiCharactersSol = ['zèbre', 'abeille', 'écureuil', 'chat'];
nonAsciiCharactersSol.sort(function (a, b) {
    return a.localeCompare(b);
});
console.log({nonAsciiCharactersSol: nonAsciiCharactersSol}); //{ nonAsciiCharatersSol: [ 'abeille', 'chat', 'écureuil', 'zèbre' ] }

/* --------------------Problem:3--------------- */
let nonAsciiCharactersWithNull = ['zèbre', 'abeille', null, 'écureuil', 'chat'];
nonAsciiCharactersWithNull.sort(function (a, b) {
    if(a){
        return a.localeCompare(b);
    }
});
console.log({nonAsciiCharactersWithNull: nonAsciiCharactersWithNull});