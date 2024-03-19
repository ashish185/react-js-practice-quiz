const numbers = [1, 1, 2, 4, 4];
const mp = new Map();
numbers.forEach((el) => {
  if (!mp.get(el)) {
    mp.set(el, 1);
  }
  else{
      mp.set(el,mp.get(el)+1);
  }
});
console.log(mp);

const st= new Set(numbers);
console.log(Array.from(st));

const obj = {name:'Ashish',val:10};
console.log(Object.keys(obj).map( key => console.log(key)));


for (const [key, value] of mp.entries()) {
  console.log(key, value);
}