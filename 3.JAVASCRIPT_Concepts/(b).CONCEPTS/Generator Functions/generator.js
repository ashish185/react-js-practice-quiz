//
//Generator gives us object as per yield.
//The object we get have yield value along with done key, if all the values yield then it gives true
//Use case
//We don't need to store values in another array

function* numbersGen(){
    let i=0;
    while(true){
        yield i++;
    }
}

const gen= numbersGen();
console.log(gen.next());
//it returns an object
//{ value: 1, done: false }
console.log(gen.next().value); //1
console.log(gen.next()); //2

function* numbersGen2(){
   yield "x";
   yield "y";
   return "I am return";
}
const gen2= numbersGen2();
console.log(gen2)//Object [Generator] {}
console.log(gen2.next());//{ value: 'x', done: false }
console.log(gen2.next());//{ value: 'y', done: false }
console.log(gen2.next());//{ value: 'I am return', done: true }.
console.log(gen2.next());//{ value: undefined, done: true }

//We can use yield as variable
function* numbersGen3(){
    return `${yield}` + "I am return2";
 }
const gen3= numbersGen3();
console.log(gen3.next());//{ value: 'x', done: false }
console.log(gen3.next("Yield can be use as Variable "));
//{ value: 'Yield can be use as Variable I am return2', done: true }
function* numbersGen4(){
   yield "it1";
   yield "it2";
}
for (const iterator of numbersGen4()) {
    console.log("iterator",iterator); 
}
//iterator it1
//iterator it2