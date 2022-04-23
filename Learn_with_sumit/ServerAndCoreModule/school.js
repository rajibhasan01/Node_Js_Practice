const EventEmitter = require('events');

class School extends EventEmitter{
    startPeriod(){
        console.log('Class started');

        // raise an event when bell rings
        setTimeout(()=>{
            this.emit('bellRing', {
                period: 'first',
                text: 'Period ended',
            });
        }, 2000);
    }
}

module.exports = School;