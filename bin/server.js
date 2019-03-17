'use strict';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const Hapi = require('hapi');

const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0'
});

server.route(require('../src/routes'));

const init = async () => {
    await server.register(require('../src/plugins'));
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();