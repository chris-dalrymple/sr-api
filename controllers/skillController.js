"use strict";

const _ = require('lodash');

const SkillController = function(skills) {
    function getSkills(req, res) {
        skills.fetch({}, (err, body) => {
            if (!err) {
                // hypermedia._embedded.characters = body.rows;
                // hypermedia.total = body.total_rows;
                return res.status(200).send(body);
            }
            else
                return res.status(404).send(err);
        });
    };

    function getSkill(req, res) {
        // Validate params
        if (_.isEmpty(req.params.id)) {
            return res.status(404).send('Invalid skill id: ', req.params.id);
        }

        skills.get(req.params.id, (err, body) => {
            if (!err) {
                // hypermedia._embedded.characters = body.rows;
                // hypermedia.total = body.total_rows;
                return res.status(200).send(body);
            } else {
                return res.status(404).send(err);
            }
        });
    };

    return {
        getSkills,
        getSkill
    }
}

module.exports = SkillController;