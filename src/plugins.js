const Environment = require('./Environment');
const plugins = [];

// Swagger
plugins.push(require('inert'));
plugins.push(require('vision'));
plugins.push(require('../plugins/hapi-swagger'));

// Not Production (Development)
if (!Environment.isProduction()) {
    plugins.push(require('../plugins/blipp'));
    /*plugins.push({
        plugin: require('hapi-pino'),
        options: {
            prettyPrint: true,
            logEvents: ['response', 'onPostStart']
        }
    });*/
}

module.exports = plugins;