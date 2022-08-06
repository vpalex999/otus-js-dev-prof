var EventEmitter = require('events');

const myEmitter = new EventEmitter();

const listener = () => {
  console.log('an event occurred!');
};

myEmitter.on('on-data-received', listener);

myEmitter.emit('on-data-received');

myEmitter.removeListener('on-data-received', listener);

myEmitter.emit('on-data-received');
