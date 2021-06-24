const pool = require( '../../databsePool');

class TraitTable {
    static getTraitId ( { traitType , traitValue}){
        return new Promise((resolve , reject )=> {
           pool.query (
               'SELECT id from trait WHERE "traitType" = $1 AND "traitValue" = $2',
               [traitType , traitValue],
               (error , response) => {
                   if (error) return reject(error);

                   resolve( { traitId : response.rows[0].id })
               }
           )
        })
    }

}

module.exports = TraitTable;