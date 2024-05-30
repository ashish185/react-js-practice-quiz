// const obj={
//   name: 'Ashish',
//   printName(){
//     console.log(this === window);
//     console.log('printName', this.name);
//   }
// };
// obj.printName(); // this in not window obj current object. therefor: Ashish
// const y = obj.printName;
// y();// this becomes undefined Therefore : Error
// /* Note *******: There's exception with setTimeout */
// setTimeout(obj.printName, 0); // this becomes window object: Therefore undefined


const sum = (a) => {
  return (b) => {
    return a + b;
  }
}

console.log(sum(2)(5)); //7

const sumInfinite = (a) => {
  return (b) => {
    return b ? sumInfinite(a + b) : a;
  }
}

console.log(sumInfinite(2)(5)(3)());