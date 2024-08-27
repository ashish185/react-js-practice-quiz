// interface Laziness {
//   sleep: (time: number) => Laziness
//   sleepFirst: (time: number) => Laziness
//   eat: (food: string) => Laziness
// }


class ALazyMen{
  constructor(name, fn){
    this.name= name;
    this.firstPriorityQueue=[];
    this.secondPriorityQueue=[];
    fn(`Hi I am ${this.name}!`)
    return this;
  }
  eat(fruitName) {
    console.log(`Eat ${fruitName}`);
    return this;
  }
  sleepFirst(timeout){

  }

  sleep(timeout){
    let id= setTimeout(() => {
      console.log(`Wake up after ${timeout/1000} second.!`);
    }, timeout);
    return this;
  }
}




/**
 * @param {string} name
 * @param {(log: string) => void} logFn
 * @returns {Laziness}
 */
function LazyMan(name, logFn) {
  // your code here
  const obj= new ALazyMen(name, logFn);
  return obj;
}

LazyMan('Jack', console.log).eat('banana')
  // .sleepFirst(10)
  // .eat('apple')
  // .sleep(1)

// Wake up after 10 seconds.
// Hi, I'm Jack.
// Eat banana
// Eat apple
// Wake up after 1 second.