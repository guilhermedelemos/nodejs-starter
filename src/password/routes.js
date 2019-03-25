const handler = require('./handler');
const Joi = require('joi');

const routes = [
    {
        method: 'GET',
        path: '/password',
        handler: handler.generatePassword,
        options: {
            description: 'Generate a password',
            notes: 'Generate a password with letters and numbers.',
            tags: ['api', 'password']
        }
    },
    {
        method: 'GET',
        path: '/password/strong',
        handler: handler.generateStrongPassword,
        options: {
            description: 'Generate a strong password',
            notes: 'Generate a strong password with letters and numbers.',
            tags: ['api', 'password']
        }
    }
];

module.exports = routes;