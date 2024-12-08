//Convert String into Number
const num1="+1"
const num2="-1";
const num3="1";
//they work direct also
console.log(parseInt(num1),parseInt(num2)); //1 -1
console.log(Number.parseFloat(num1),Number.parseFloat(num2)); //1 -1

//kisi bhi string aage + operator lga do to vo convert ho jata h number m
console.log(typeof(num3),(typeof(+num1)),+num2);

console.log("1"+2);//12
console.log(2+"1");//21
console.log('2'-1);//1
console.log('2'-'2');//0
console.log('A'-'2');//NAN

/* Precision */
 let z= 4/3;
 console.log(z); //1.3333333333333333
 console.log(z.toFixed(2)); //1.33
 console.log(z.toPrecision(2)); //1.3 *
 console.log(Math.floor(3.5)); //3
 console.log(Math.ceil(3.5)); //4

 //Number to String
 console.log(z.toString(),typeof(z.toString())); //1.3333333333333333 string

 //instance of and type of

const arr=[];
console.log( arr instanceof Array, Array.isArray()); //true
console.log( typeof arr); //object