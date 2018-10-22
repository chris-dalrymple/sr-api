"use strict";

const _ = require('lodash');
const ValidationError = require('../errors/ValidationError');

class CharacterDetailValidator {
    constructor() {
        this.validFields = ['name', 'metatype', 'ethnicity', 'age', 'sex', 'height', 'weight'];
    }

    validate(detailObject) {
        console.log('Validating details object.');
        // Validate that we're not null and that we're an object
        if (!detailObject || typeof detailObject !== 'object' || _.isEmpty(detailObject)) {
            throw new ValidationError('Invalid field \'details\'.')
        }

        // Validate that the fields match what is allowed
        const fieldArray = Object.getOwnPropertyNames(detailObject);
        if (fieldArray.length > this.validFields.length) {
            throw new ValidationError('Invalid field count.');
        }

        for (var str of fieldArray) {
            if (this.validFields.indexOf(str) === -1 || fieldArray.length > this.validFields.length) {
                throw new ValidationError('Invalid field \'' + str + '\'.');
            }
        }

        // Make sure necessary elements exist
        if (!detailObject.name || _.isEmpty(detailObject.name)) {
            throw new ValidationError('Invalid field \'name\'.');
        }
    }
}

module.exports = CharacterDetailValidator;