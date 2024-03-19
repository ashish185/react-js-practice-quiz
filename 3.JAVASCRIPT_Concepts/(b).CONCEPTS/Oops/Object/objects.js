console.log("---------------------Objects-------------");
/* Object are Typically reflect “real-world” entities eg button*/

const obj1 = {
    name: 'ash',
    lastname: 'singhal'
}

const objByNew = new Object();
objByNew.name = 'arpit';

//1.Inserting a key into object

obj1.rollNum = 1214185;
console.log("Obj1", obj1);
//Obj1 { name: 'ash', lastname: 'singal', rollNum: 1214185 }
console.log("object by new",objByNew);

//2.Deleting a key into object
delete obj1.name;
console.log("Obj1 after del", obj1);

//can we delete arr element directly is is also an object?
const arr=[1,2,3];
delete arr[0];
console.log("value of arr",arr[0],arr[1],arr[2]); //undefined 2 3


// if we try to get name
console.log("name even after delete is undefined - ", obj1.name);
console.log("Some randpom val - ", obj1.namaae); //undefined not error

//3. updating
obj1.name = 'ashish singhal';


//Use of square brackets
const objForSqbrackets= {
    // my-name: 's' It will give error to resolve this type of problem sq brackets comes
    'my-name': 'square bracket',
    1: 'One',
    '1':'One with string'
}
// console.log(objForSqbrackets[my-name]); //Give error as - is not allowed
console.log(objForSqbrackets['my-name']);
console.log("Val at 1",objForSqbrackets[1]); //One with string
console.log("Val at 1",objForSqbrackets['1']); //One

//************Exception
const objeSeq= {
  1:'at one',
  0: 'at zero'
}
console.log("It will sort",objeSeq); //It will sort { '0': 'at zero', '1': 'at one' }

/* As array is also an object it do the mapping internally with keys */