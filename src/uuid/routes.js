const handler = require('./handler');
const Joi = require('@hapi/joi');

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
                            .description('"name" to create UUID with.')
                            .default('test'),
                    namespace: Joi.string()
                            .uuid()
                            .required()
                            .description('"namespace" UUID as string.')
                            .default('791c7cae-81c0-46a3-8f0e-236a9ee613fb'),
                })
            }
        }
    }
];

module.exports = routes;