
const pool = require('../databsePool');
const query = require('../bin/sql/generation');
const querycreate = require('../bin/sql/dragon');
const createdb = require('../bin/sql/createdb.js');
const dropdb = require('../bin/sql/dropdb');

class GenerationTable {
//   static  createGenerationTable(){
//         pool.query( query , (error , response) => {
//             if(error) return console.log(error);
//         })
//     }

static storeGeneration( generation) {
    return new Promise((resolve,reject) => {

        pool.query (  'INSERT INTO generation(expiration) VALUES($1) RETURNING id', [generation.experation], (error , response) => {
            if(error) return reject(error);
    
            const generationId = response.rows[0].id;

            resolve( { generationId })
        })

     })

  
}
   
    // static  createDragonTable(){
    //     pool.query( querycreate , (error , response) => {
    //         if(error) return console.log(error);
    //     })
    // }

}

module.exports = GenerationTable;