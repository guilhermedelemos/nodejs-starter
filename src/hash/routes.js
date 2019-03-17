const handler = require('./handler');

const routes = [{
        method: 'GET',
        path: '/md5/{value}',
        handler: handler.hashMd5
    },
    {
        method: 'GET',
        path: '/sha1/{value}',
        handler: handler.hashSha1
    },
    {
        method: 'GET',
        path: '/sha256/{value}',
        handler: handler.hashSha256
    },
    {
        method: 'GET',
        path: '/sha512/{value}',
        handler: handler.hashSha512
    }
];

module.exports = routes;