const glob = require('glob');
const path = require('path');
const _ = require('lodash');
var packageJson = require('../package.json');

const routes = [{
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return {
                name: `${packageJson.name}`,
                version: `${packageJson.version}`,
                description: `${packageJson.description}`,
                github: `${packageJson.repository.url}`,
                demo: 'https://hapijs-starter.herokuapp.com',
                documentation: '/documentation'
            };
        },
        options: {
            description: 'API root',
            notes: 'Shows the API name, demo app, GitHub URL and documentation endpoint.',
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