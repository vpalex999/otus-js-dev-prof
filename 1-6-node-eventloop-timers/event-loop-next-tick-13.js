// "Наиболее быстрое" исполнение асинхронных операций в фазах Event Loop

console.log('start')

setImmediate(() => {
  console.log('immediate');
});

process.nextTick(() => {
  console.log('nextTick');
});

console.log('scheduled');

// start
// scheduled
// nextTick
// immediate
