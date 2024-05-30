console.log('1');

setTimeout(()=>{
  console.log('2');
},0);


Promise.resolve('3').then(el => console.log(el));


console.log('4');