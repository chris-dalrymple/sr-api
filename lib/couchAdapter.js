"use strict";

class CouchDatabaseAdapter {
    constructor (connection) {
        this.couchConnection = require('nano')('http://' + connection.host + ':' + connection.port);
    }

    createDatabase(name) {
        this.couchConnection.db.create(name, (err, body) => {
            if (!err) {
                console.log('Database created.');
            }
        });
        return this.couchConnection.db.use(name);
    }

    // deleteDatabase(name) {
    //     this.couchConnection.db.deleteDatabase(name);
    // }
}

module.exports = CouchDatabaseAdapter;
