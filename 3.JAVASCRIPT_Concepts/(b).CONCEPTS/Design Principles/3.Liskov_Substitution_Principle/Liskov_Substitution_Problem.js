/* The principle defines that objects of a superclass shall be replaceable with objects of 
its subclasses without breaking the application */
class Bird {
  fly() {
    console.log('I can fly');
  }
}

class Duck extends Bird {
  quack() {
    console.log('I can quack');
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error('Cannot fly');
  }
  swim() {
    console.log('I can swim')

  }
}

function makeBirdFly(bird) {
  bird.fly();
}

const duck = new Duck();
const duck2 = new Bird();

const penguin = new Penguin()

makeBirdFly(duck)
makeBirdFly(penguin) // Error: Cannot fly Penguin
makeBirdFly(duck2) //Every superclass is replaceable of subclass object