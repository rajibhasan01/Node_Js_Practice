const EventEmitter = require('events');

const emitter = new EventEmitter();

// register a listener for bellRing event
emitter.on('bellRing', ()=>{
    console.log('We need to run!');
})

emitter.on('closePriod', (period)=>{
    console.log(`Our ${period}. So, ready for the quize.`);
})
// raise an event

emitter.emit('bellRing');

setTimeout(() => {
    emitter.emit('closePriod', 'second period ended');
},2000)