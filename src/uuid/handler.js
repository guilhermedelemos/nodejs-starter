const uuidv4 = require('uuid/v4');
const uuidv5 = require('uuid/v5');
const generateUuidV4 = function (request, h) {
    return {
        uuid: uuidv4(),
        version: 4
    };
};
const generateUuidV5 = function (request, h) {
    return {
        uuid: uuidv5(request.payload.value, request.payload.namespace),
        version: 5
    };
};
module.exports = {
    generateUuidV4,
    generateUuidV5
}