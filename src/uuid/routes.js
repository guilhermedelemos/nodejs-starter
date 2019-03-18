const handler = require('./handler');

const routes = [{
    method: 'GET',
    path: '/uuid/generate',
    handler: handler.generateUuidV4,
    options: {
        description: 'UUID generator',
        notes: 'Generate UUID v4',
        tags: ['api']
    }
}];

module.exports = routes;