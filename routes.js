"use strict";

const express = require('express');

const routes = function(couchdb) {
    const router = express.Router();
    const characterCollection = couchdb.createDatabase('characters');
    const skillCollection = couchdb.createDatabase('skills');
    const userCollection = couchdb.createDatabase('users');

    const characs = require('./controllers/characterController')(characterCollection);
    const info = require('./controllers/infoController')();
    const skills = require('./controllers/skillController')(skillCollection);
    const users = require('./controllers/userController')(userCollection);

    router.route('/info')
        .get(info.getInfo);

    router.route('/characters')
        .get(characs.getCharacters)
        .post(characs.postCharacter);

    router.route('/characters/:id')
        .get(characs.getCharacter)
        .delete(characs.deleteCharacter);

    router.route('/skills')
        .get(skills.getSkills);
    
    router.route('/skills/:id')
        .get(skills.getSkill);

    return router;
}

module.exports = routes;
