## Lazy man question description
LazyMan is very lazy, he only eats and sleeps.
LazyMan(name: string, logFn: (log: string) => void) would output a message, the passed logFn is used.

```js
LazyMan('Jack', console.log)
// Hi, I'm Jack.
```

He can eat(food: string)
```js
LazyMan('Jack', console.log)
  .eat('banana')
  .eat('apple')
// Hi, I'm Jack.
// Eat banana.
// Eat Apple.
```

He also sleep(time: number), time is based on seconds.

```js
LazyMan('Jack', console.log)
  .eat('banana')
  .sleep(10)
  .eat('apple')
  .sleep(1)
// Hi, I'm Jack.
// Eat banana.
// Wake up after 10 seconds.
// Eat Apple.
// Wake up after 1 second.
```

He can sleepFirst(time: number), which has the highest priority among all tasks, no matter what the order is.
```js
LazyMan('Jack', console.log)
  .eat('banana')
  .sleepFirst(10)
  .eat('apple')
  .sleep(1).
  .sleepFirst(20)
// Wake up after 10 seconds.
// Wake up after 20 seconds.
// Hi, I'm Jack.
// Eat banana
// Eat apple
// Wake up after 1 second.
```
Please create such LazyMan()