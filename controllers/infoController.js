'use strict';

const InfoController = function() {
    const info = {
        version: "0.1.0"
    }

    function getInfo(req, res) {
        res.status(200).json(info);
    }

    return {
        getInfo
    }
}

module.exports = InfoController;