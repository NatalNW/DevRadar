const { Router } = require('express');

const routes = Router();

routes.get('/devs', (request, response) => {
    return response.json({ message: 'Hello Word'});
});

module.exports = routes;

