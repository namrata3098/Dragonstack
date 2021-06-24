const Generation = require('./index.js');
const GenerationTable = require('../table.js');

class GenerationEngine{
    constructor() {
    this.generation = null;
    this.timer = null;
    }

    start() {
        // GenerationTable.dropDb();
        // GenerationTable.createDb();
        // GenerationTable.createGenerationTable();
        this.buildNewGeneration();
    }

    stop(){
        clearInterval(this.timer);
    }

    buildNewGeneration() {
        const generation = new Generation();

        GenerationTable.storeGeneration(generation).then( ({ generationId }) => 
        {   
            this.generation = generation;
            this.generation.generationId = generationId;

            this.timer = setTimeout(()=> {
                this.buildNewGeneration();
            } , this.generation.experation.getTime() - Date.now() );
            
        
        })
        .catch(error => console.error(error));

        console.log( 'new generation' , this.generation);

       
    }

}

module.exports = GenerationEngine;