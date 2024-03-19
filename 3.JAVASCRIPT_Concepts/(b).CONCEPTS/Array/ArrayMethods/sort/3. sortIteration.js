const animals = [
    13,18,15,11
];

/* For descending order */
animals.sort((a,b) => {
    console.log(b, a);
    return b-a
});

console.log('sortedResult', animals); //[ 18, 15, 13, 11 ]
