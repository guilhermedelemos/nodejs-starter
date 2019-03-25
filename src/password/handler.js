var generator = require('generate-password');

const generatePassword = async function (request, h) {
    var password = generator.generate({
        length: 10,
        numbers: true,
        symbols: false,
        uppercase: true,
        excludeSimilarCharacters: true,
        strict: true
    });
    return { password: password };
};

const generateStrongPassword = async function (request, h) {
    var password = generator.generate({
        length: 20,
        numbers: true,
        symbols: true,
        uppercase: true,
        excludeSimilarCharacters: true,
        strict: true
    });
    return { password: password };
};

module.exports = {
    generatePassword,
    generateStrongPassword
}