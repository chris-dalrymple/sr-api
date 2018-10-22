"use strict";

class characterDataResponseModel {
    constructor() {
        this.__links;
        this._total;
        this._count;
        this._data;
    }

    get _links() {
        return this.__links;
    }

    set _links(links) {
        this.__links = links;
    }

    get total() {
        return this._total;
    }

    set total(total) {
        this._total = total;
    }

    get count() {
        return this._count;
    }

    set count(count) {
        this._count = count;
    }

    get data() {
        return this._data;
    }

    set data(data) {
        this._data = data;
    }
}