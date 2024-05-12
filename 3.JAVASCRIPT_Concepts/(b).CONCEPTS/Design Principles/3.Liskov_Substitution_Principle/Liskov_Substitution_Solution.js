class FlyingBird {
  fly() {
    console.log('I can fly');
  }
}

class SwimmingBird {
  swim() {
    console.log('I can swim')
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log('I can quack');
  }
}

class Penguin extends SwimmingBird {
}

/* Followed LSP */
function makeBirdFly(bird) {
  bird.fly();
}
function makeBirdSwim(bird) {
  bird.swim();
}
const duck = new Duck()
const duck2 = new FlyingBird()
const penguin = new Penguin()
const penguin2 = new SwimmingBird()

makeBirdFly(duck);
makeBirdFly(duck2);
makeBirdSwim(penguin);
makeBirdSwim(penguin2);