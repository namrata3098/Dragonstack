const TRAITS = require('../../data/trait.json');

const DEFAULT_PROPERTIES = {
    dragonId : undefined,
    nickname : 'unnamed',
    generationId: undefined,
    get birthday() {
        return new Date();
    },
    get RandomTraits() {
        const traits = [];
        TRAITS.forEach(TRAIT=> {
           const traitType = TRAIT.types;
           const traitValues = TRAIT.values;
           const traitValue = traitValues[Math.floor(Math.random() * TRAIT.values.length)];

           traits.push({traitType , traitValue})
        })
        return traits;
    }
}


class Dragon {
    constructor( {nickname , birthdate , traits , dragonId , generationId} = {}) {
        this.dragonId = dragonId || DEFAULT_PROPERTIES.dragonId;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname; 
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthday;
        this.traits =  traits || DEFAULT_PROPERTIES.RandomTraits;
        this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
    }
}
module.exports = Dragon;