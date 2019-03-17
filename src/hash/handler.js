var crypto = require('crypto');
const hashMd5 = function (request, h) {
    return {
        hash: crypto.createHash('md5').update(request.params.value).digest('hex')
    };
};
const hashSha1 = function (request, h) {
    return {
        hash: crypto.createHash('sha1').update(request.params.value).digest('hex')
    };
};
const hashSha256 = function (request, h) {
    return {
        hash: crypto.createHash('sha256').update(request.params.value).digest('hex')
    };
};
const hashSha512 = function (request, h) {
    return {
        hash: crypto.createHash('sha512').update(request.params.value).digest('hex')
    };
};
module.exports = {
    hashMd5,
    hashSha1,
    hashSha256,
    hashSha512
}