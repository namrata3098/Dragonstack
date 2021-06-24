const { response } = require('express');
const pool = require('../../databsePool');
const DragonTraitTable = require('../dragonTrait/table');

class DragonTable{

    static storeDragon( dragon ) {
        const { birthdate , nickname , generationId } = dragon;


        return new Promise((resolve, reject) => { 
            pool.query('INSERT INTO dragon(birthdate , nickname , "generationId" ) VALUES($1 , $2 , $3) RETURNING id',
            [birthdate , nickname , generationId],
            (error , response) => {
                if(error) return reject(error);

                const dragonId = response.rows[0].id;

               Promise.all(dragon.traits.map(({ traitType , traitValue }) => {
                    return  DragonTraitTable.storeDragonTrait( { dragonId , traitType , traitValue })
                })).then(() => resolve( {dragonId} ))
               .catch(errro => console.error(error) )

            }
            
            )
        })
    }

    static getDragon( { dragonId} ){
        return new Promise( (resolve , reject) => {
            pool.query (' SELECT birthdate , nickname , generationId FROM dragon WHERE dragon.id = "$1" ' , 
            [dragonId] ,
            (error , response) => {
                if(error) return reject(error);

                if(response.length.rows === 0) return reject( new Error( 'No Dragon'));

                resolve (response.rows[0]);
            })
        })
    }
}

module.exports = DragonTable;