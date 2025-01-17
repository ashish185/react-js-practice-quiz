## Generators
A generator function is a special type of function that can `pause` its execution at any point and `resume` later. 

```js
function* generatorFunction() {
    yield 'Hello';
    yield 'World';
    return 'Done';
}

const generator = generatorFunction();

console.log(generator.next());
console.log(generator.next()); 
console.log(generator.next());
console.log(generator.next());

/* 
{ value: 'Hello', done: false }
{ value: 'World', done: false }
{ value: 'Done', done: true }
{ value: undefined, done: true }
*/
```

## How Do Generators Work?
Creating a Generator: Call the generator function to create a generator object.
Using the next() Method: The next() method moves the generator to the next yield statement, returning an object with value and done properties.
value: The value yielded by the generator.
done: A boolean indicating whether the generator has completed execution.