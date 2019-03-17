const handler = require('./handler');

const routes = [{
        method: 'GET',
        path: '/cnpj/generate',
        handler: handler.generateCnpj
    },
    {
        method: 'GET',
        path: '/cnpj/validate/{cnpj}',
        handler: handler.validateCnpj
    }
];

module.exports = routes;