'use strict'

const database = require("../db/databaseAccess");

module.exports = {
    get: async (req, res) => {
        let listUsers = await database.getUsers();
        let listLastName = await database.getLastNames();
    
        listUsers.map(g => {
        const result = listLastName.find( item => item.id === g.id );
        g.lastName = result.lastName;
        return g;
        });
        res.json(listUsers);
    }    
}