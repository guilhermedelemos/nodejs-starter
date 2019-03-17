const _ = require('lodash');
const plugins = [];

if (process.env.NODE_ENV !== 'production') {
    plugins.push({
        plugin: require('blipp'),
        options: {
            showAuth: true
        }
    });
    /*plugins.push({
        plugin: require('hapi-pino'),
        options: {
            prettyPrint: true,
            logEvents: ['response', 'onPostStart']
        }
    });*/
}

module.exports = plugins;