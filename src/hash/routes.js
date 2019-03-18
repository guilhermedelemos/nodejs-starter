const handler = require('./handler');
const Joi = require('joi');

const routes = [{
        method: 'GET',
        path: '/md5/{value}',
        handler: handler.hashMd5,
        options: {
            description: 'MD5 Hash',
            notes: 'Calculate a MD5 hash of a string.',
            tags: ['api', 'hash'],
            validate: {
                params: {
                    value : Joi.string()
                            .required()
                            .description('String to be hashed'),
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/sha1/{value}',
        handler: handler.hashSha1,
        options: {
            description: 'SHA1 Hash',
            notes: 'Calculate a SHA1 hash of a string.',
            tags: ['api', 'hash'],
            validate: {
                params: {
                    value : Joi.string()
                            .required()
                            .description('String to be hashed'),
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/sha256/{value}',
        handler: handler.hashSha256,
        options: {
            description: 'SHA256 Hash',
            notes: 'Calculate a SHA256 hash of a string.',
            tags: ['api', 'hash'],
            validate: {
                params: {
                    value : Joi.string()
                            .required()
                            .description('String to be hashed'),
                }
            }
        }
    },
    {
        method: 'GET',
        path: '/sha512/{value}',
        handler: handler.hashSha512,
        options: {
            description: 'SHA512 Hash',
            notes: 'Calculate a SHA512 hash of a string.',
            tags: ['api', 'hash'],
            validate: {
                params: {
                    value : Joi.string()
                            .required()
                            .description('String to be hashed'),
                }
            }
        }
    }
];

module.exports = routes;