const handler = require('./handler');

const routes = [
    {
        method: 'GET',
        path: '/uuid/generate',
        handler: handler.generateUuidV4,
        options: {
            description: 'UUID generator',
            notes: 'Generate UUID v4',
            tags: ['api']
        }
    },
    {
        method: 'POST',
        path: '/uuid/generate/v5',
        handler: handler.generateUuidV5,
        options: {
            description: 'UUID generator',
            notes: 'Generate UUID v5',
            tags: ['api']
        }
    }
];

module.exports = routes;