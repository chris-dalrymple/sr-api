"use strict";

const _ = require('lodash');
const validator = require('../validators/characterValidator');

const CharacterController = function(characters) {
    function getCharacters(req, res) {
        const url = req.protocol + '://' + req.get('host') + req.originalUrl;
        const hypermedia = {
            _links: {
                self: url
            },
            total: 0,
            _embedded: {
                characters:{}
            }
        };
        characters.fetch({}, (err, body) => {
            if (!err) {
                hypermedia._embedded.characters = body.rows;
                hypermedia.total = body.total_rows;
                res.status(200).send(hypermedia);
            }
            else
                res.status(404).send(err);
        });
    }

    function getCharacter(req, res) {
        // Validate params
        if (!_.isEmpty(req.params.id)) {
            res.status(404).send('Invalid character id.');
        }

        // Set metadata
        const url = req.protocol + '://' + req.get('host') + req.originalUrl;
        const hypermedia = {
            _links: {
                self: url
            },
            total: 0,
            _embedded: {
                characters: {}
            }
        };

        // Get data from database
        characters.get(req.params.id, (err, body) => {
            if (!err) {
                hypermedia._embedded.characters = body.rows;
                hypermedia.total = body.total_rows;
                res.status(200).send(hypermedia);
            } else {
                res.status(404).send(err);
            }
        });
    }

    function postCharacter(req, res) {
        // Check that the request has some data in it.
        if (!req.body || _.isEmpty(req.body)) {
            res.status(401).send('Empty character data.');
            return;
        }

        // Validate character data.
        const characterValidator = new validator();
        try {
            characterValidator.validate(req.body);
        } catch (error) {
            res.status(401).send(error.message);
            return;
        }

        // Store data
        // characters.insert(req.body, (err, body) =>{
            // if (!err)
            // if (valid)
                res.status(201).send(req.body);
                // res.status(201).send(body);
            // else
            //     // res.status(401).send(err);
            //     res.status(401).send('Invalid character data.');
        // });
    }

    function deleteCharacter(req, res) {
        characters.get(req.params.id, (err, body) => {
            if (!err)
                characters.destroy(body._id, body._rev, (err, body) => {
                    if (!err)
                        res.status(201).send(body);
                    else
                        res.status(400).send(err);
                });
            else
                res.status(404).send(err);
        });
    }

    return {
        getCharacters,
        getCharacter,
        postCharacter,
        deleteCharacter
    }
}

module.exports = CharacterController;
