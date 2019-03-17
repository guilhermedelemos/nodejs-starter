const handler = require('./handler');

const routes = [{
    method: 'GET',
    path: '/uuid/generate',
    handler: handler.generateUuidV4
}];

module.exports = routes;