"use strict";

const detailValidator = require('./characterDetailValidator');
const attrValidator = require('./characterAttributeValidator');
const ValidationError = require('../errors/ValidationError');

class CharacterValidator {
    constructor() {
        this._detailValidator = new detailValidator();
        this._attrValidator = new attrValidator();
    }

    validate(characterObject) {
        console.log('Validating character.');
        try {
            this._detailValidator.validate(characterObject.details);
            this._attrValidator.validate(characterObject.attributes);
        } catch (error) {
            if (error.name === 'ValidationError') {
                throw new ValidationError(error.message);
            } else {
                console.log(error);
                throw new Error('Unknown error during character validation.');
            }
        }
    }
}

module.exports = CharacterValidator;