var EventEmitter = require('events');

const myEmitter = new EventEmitter();
myEmitter.on('error', () => {
  console.log('Полундра!!!');
});

myEmitter.emit('error');
