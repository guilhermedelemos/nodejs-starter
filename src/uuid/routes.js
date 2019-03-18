const handler = require('./handler');
const Joi = require('joi');

const routes = [
    {
        method: 'GET',
        path: '/uuid/generate',
        handler: handler.generateUuidV4,
        options: {
            description: 'UUID generator',
            notes: 'Generate UUID v4',
            tags: ['api', 'uuid']
        }
    },
    {
        method: 'POST',
        path: '/uuid/generate/v5',
        handler: handler.generateUuidV5,
        options: {
            description: 'UUID generator',
            notes: 'Generate UUID v5',
            tags: ['api', 'uuid'],
            validate: {
                payload: Joi.object({
                    name: Joi.string()
                            .required()
                            .description('"name" to create UUID with.'),
                    namespace: Joi.string()
                            .uuid()
                            .required()
                            .description('"namespace" UUID as string.'),
                })
            }
        }
    }
];

module.exports = routes;