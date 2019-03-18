const glob = require('glob');
const path = require('path');
const _ = require('lodash');

const routes = [{
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return {
                msg: 'nodejs-starter (hapi)',
                demo: 'https://hapijs-starter.herokuapp.com',
                github: 'https://github.com/guilhermedelemos/nodejs-starter/tree/hapijs'
            };
        },
        options: {
            description: 'API root',
            notes: 'Shows the API name, GitHub URL and the demo heroku app.',
            tags: ['api'],
        }
    }
];

glob.sync('./src/**/routes.js').forEach((file) => {
    if (file !== './src/routes.js') {
        routes.push(require(path.resolve(file)));
    }
});

module.exports = _.flattenDeep(routes);