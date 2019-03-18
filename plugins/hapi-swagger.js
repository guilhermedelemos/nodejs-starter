const Pack = require('../package');
const hapiSwagger = {
    plugin: require('hapi-swagger'),
    options: {
        info: {
            title: 'HapiJS Starter',
            description: ' API Documentation',
            version: Pack.version,
        },
        documentationPath: '/documentation',
        expanded: 'list', // none, list, full
        // jsonEditor: true,
        sortEndpoints: 'ordered', // path, method, ordered,
        lang: 'en', // en, es, fr, it, ja, pl, pt, ru, tr, zh-cn
        pathPrefixSize: 1,
        tags: [
            {
                "name": "hash",
                "description": "Hash algorithms"
            },
            {
                "name": "uuid",
                "description": "Universally unique identifier"
            }
        ],
        grouping: 'tags', // path || tags
    }
};
module.exports = hapiSwagger;