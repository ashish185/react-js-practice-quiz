const item1=undefined;
let val = (item1 || 'hi')?.ot?.name;

console.log(val);


let item2;
let val2 = (item2)?.ot?.name || 'i am undefined' ;

console.log(val2);

let item3;
let val3 = (item2)?.ot?.name || '' ;

console.log(val3);

let item4;
let val4 = item4?.ot?.name;

console.log(val4);

let item5=null;
let val5 = item5?.ot?.name;
console.log(val5);

let item6 = {
   ot: {
      name: 'x'
   }
};
let val6 = item6?.ot?.name;
console.log(val6); //x