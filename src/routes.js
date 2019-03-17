const glob = require('glob');
const path = require('path');
const _ = require('lodash');

const routes = [{
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return {
                msg: 'nodejs-base (hapi)'
            };
        }
    },
    {
        method: 'GET',
        path: '/{name}',
        handler: (request, h) => {
            return {
                // msg: 'Hello, ' + encodeURIComponent(request.params.name) + '!',
                msg: `Hello ${request.params.name}`
            };
        }
    }
];

glob.sync('./src/**/routes.js').forEach((file) => {
    if (file !== './src/routes.js') {
        routes.push(require(path.resolve(file)));
    }
});

module.exports = _.flattenDeep(routes);