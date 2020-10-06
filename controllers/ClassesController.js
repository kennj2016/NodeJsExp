'use strict'

const database = require("../db/databaseAccess");

module.exports = {
    get: async (req, res) => {
        let listClasses = await database.getAllClasses();
        res.json(listClasses);
    }    
}