const controller = require('../../controllers/characterController')();

describe('Test suite', () => {
    it ('should return a 200 status', () => {
        let req = {};
        let res = {
            status: (value) => { return value; },
            json: (value) => { return value; }
        };
        spyOn(res, 'status');
        spyOn(res, 'json');
        controller.getCharacters(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
    });
});