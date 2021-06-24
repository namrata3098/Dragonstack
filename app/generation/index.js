const { REFRESH_RATE , SECONDS } = require('../config');
const Dragon = require('../dragon');
const refresh_rate = REFRESH_RATE * SECONDS

class Generation {
    constructor() {
        this.experation = this.calculateExpiration();
        this.generationId = undefined;
    }

    calculateExpiration(){

        const experationPeriod = Math.floor(Math.random() * (refresh_rate/2));

        const msUntillExpiration = Math.random() < 0.5 ? 
        refresh_rate - experationPeriod : refresh_rate + experationPeriod;

        return new Date( Date.now() + msUntillExpiration);
    }

    newDragons() {
        if(Date.now() > this.experationPeriod){
            throw new Error (`This generation expired on ${this.experationPeriod}`)
        }
        return new Dragon( { generationId : this.generationId});
    }
}

module.exports = Generation;

