const {
    cnpj
} = require('cpf-cnpj-validator');

const generateCnpj = function (request, h) {
    return {
        cnpj: cnpj.generate()
    };
};

const validateCnpj = function (request, h) {
    return {
        isValid: cnpj.isValid(request.params.cnpj) === true
    };
};

module.exports = {
    generateCnpj,
    validateCnpj
}