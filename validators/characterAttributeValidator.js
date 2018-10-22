"use strict";

const _ = require('lodash');
const ValidationError = require('../errors/ValidationError');

class CharacterAttributeValidator {
    constructor() {
        this.validFields = ['body', 'agility', 'reaction', 'strength', 'willpower', 'logic', 'intuition', 'charisma', 'edge'];
    }

    validate(attributesObject) {
        console.log('Validating attributes object.');
        // Validate that we're not null and that we're an object
        if (!attributesObject || typeof attributesObject !== 'object' || _.isEmpty(attributesObject)) {
            throw new ValidationError('Invalid field \'attributes\'.')
        }

        // Validate that the fields match what is allowed
        const fieldArray = Object.getOwnPropertyNames(attributesObject);
        if (fieldArray.length > this.validFields.length) {
            throw new ValidationError('Invalid field count.');
        }

        for (var str of fieldArray) {
            if (this.validFields.indexOf(str) === -1 || fieldArray.length > this.validFields.length) {
                throw new ValidationError('Invalid field \'' + str + '\'.');
            }

            if (!attributesObject[str] || typeof attributesObject[str] !== 'number') {
                throw new ValidationError('Invalid value \'' + attributesObject[str] + '\' in field \'' + str + '\'.');
            }
        }
    }
}

module.exports = CharacterAttributeValidator;