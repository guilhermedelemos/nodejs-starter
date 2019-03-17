const uuidv4 = require('uuid/v4');
const generateUuidV4 = function (request, h) {
    return {
        uuid: uuidv4(),
        version: 4
    };
};
module.exports = {
    generateUuidV4
}