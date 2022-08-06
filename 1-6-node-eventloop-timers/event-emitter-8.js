var EventEmitter = require('events');

class ColdEventEmitter extends EventEmitter{
  stack = [];

  on(eventName, listener){
    super.on(eventName, listener);
    const oldStack = this.stack;
    this.stack = [];
    oldStack.forEach(({eventName, args}) => {
      this.emit(eventName, ...args);
    });
  };

  emit(eventName, ...args){
    if(!this.listenerCount(eventName)){
      this.stack.push({eventName, args});
    } else {
      super.emit(eventName, ...args);
    }
  };
}

const myEmitter = new ColdEventEmitter();

myEmitter.emit('event1');

myEmitter.on('event1', () => console.log('Event 1, Listener 1'));

myEmitter.emit('even1');

myEmitter.on('event1', () => console.log('Event 1, listener 2'));

myEmitter.emit('event1');
