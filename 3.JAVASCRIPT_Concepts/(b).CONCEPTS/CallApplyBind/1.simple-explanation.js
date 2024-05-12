
/* 
Use call() or apply() when you need to call a function immediately with a specific this value and arguments.
*/
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet.call(null, 'John');


function greet2(name, age) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet2.apply(null, ['John', 30]);


function greet3(name) {
  console.log(`Hello, ${name}!`);
}

const boundGreet = greet.bind(null, 'John');
boundGreet();