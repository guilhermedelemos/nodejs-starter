const handler = require('./handler');

const routes = [{
        method: 'GET',
        path: '/cpf/generate',
        handler: handler.generateCpf
    },
    {
        method: 'GET',
        path: '/cpf/validate/{cpf}',
        handler: handler.validateCpf
    }
];

module.exports = routes;