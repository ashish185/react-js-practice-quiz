class EventEmitter {
  constructor() {
    this.events = {};
  }
  subscribe(eventName, callback) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
    return {
      release: () => {
        this.events[eventName].pop();
      }
    }
  }

  printSubs(){
    console.log('this.events', this.events);
  }
  
  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => callback(...args));
    }
  }
}

const callback1= (arg1, arg2)=> {
  console.log('this is callback1', arg1, arg2);
}

const callback2 = (arg1, arg2) => {
  console.log('this is callback2', arg1, arg2);
}


const emitter = new EventEmitter();

const sub1  = emitter.subscribe('event1', callback1)
emitter.printSubs();

const sub2 = emitter.subscribe('event2', callback2);
emitter.printSubs();

// same callback could subscribe 
// on same event multiple times
const sub3 = emitter.subscribe('event1', callback1)

emitter.printSubs();
emitter.emit('event1', 1, 2);
emitter.emit('event2', 3, 4);
sub1.release();
console.log('After release sub1');
emitter.printSubs();
sub2.release();
console.log('After release sub2');
emitter.printSubs();
emitter.emit('event1', 3, 4);


/* 

this.events {
  event1: [ [Function: callback1] ],
  event2: [ [Function: callback2] ]
}

this.events {
  event1: [ [Function: callback1], [Function: callback1] ],
  event2: [ [Function: callback2] ]
}


After release sub1
this.events {
  event1: [ [Function: callback1] ],
  event2: [ [Function: callback2] ]
}

*/