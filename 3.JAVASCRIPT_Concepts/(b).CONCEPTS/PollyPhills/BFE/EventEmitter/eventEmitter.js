class EventEmitter {
  constructor() {
    this.events = {};
  }
  subscribe(eventName, callback) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
    return {
      release: () => {
        this.events[eventName] = this.events[eventName].filter((cb) => cb !== callback);
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

const callback3 = (arg1, arg2) => {
  console.log('this is callback3', arg1, arg2);
}



const emitter = new EventEmitter();

const sub1  = emitter.subscribe('event1', callback1)


// same callback could subscribe 
// on same event multiple times
const sub2 = emitter.subscribe('event1', callback3)
const sub3 = emitter.subscribe('event1', callback1)


const sub4 = emitter.subscribe('event2', callback2);

/* On calling event 1, it will call callback1, then callback3, then callback1  */
emitter.emit('event1', 1, 2);  //this is callback1 1 2 => this is callback3 1 2 => this is callback1 1 2
emitter.emit('event2', 3, 4); //this is callback2 3 4
sub2.release();
console.log("After release sub3");
emitter.emit('event1', 5, 6); //this is callback1 3 4
sub4.release();

