const _ = require('lodash');
const plugins = [];

const productionPlugins = [];

const developmentPlugins = [{
        plugin: require('blipp'),
        options: {
            showAuth: true
        }
    },
    /*{
        plugin: require('hapi-pino'),
        options: {
            prettyPrint: true,
            logEvents: ['response', 'onPostStart']
        }
    }*/
];

plugins.push(productionPlugins);
if (process.env.NODE_ENV !== 'production') {
    plugins.push(developmentPlugins);
}
module.exports = _.flattenDeep(plugins);