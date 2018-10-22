"use strict";

class CouchConnectionModel {
    constructor(host, port) {
        this._host = host;
        this._port = port;
    }

    get port() {
        return this._port;
    }

    set port(value) {
        this._port = value;
    }

    get host() {
        return this._host;
    }

    set host(value) {
        this._host = value;
    }
}

module.exports = CouchConnectionModel;