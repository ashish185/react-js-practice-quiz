console.log('1');

setTimeout(()=>{
  console.log('2');
},0);


Promise.resolve('3').then(el => console.log(el));


console.log('4');
//--------------------------------------------------
const originalObj={ 
  name: 'Bhavya',
  details: { rollNo: 1214185, subjects: [ 'Maths', 'Ds' ] }
};
const newObj={ ...originalObj};

newObj.name = 'Vishal';
console.log(originalObj.name);
console.log(newObj.name);

// newObj.details.rollNo= 1214186;

// console.log(originalObj.details.rollNo);
// console.log(newObj.details.rollNo);




