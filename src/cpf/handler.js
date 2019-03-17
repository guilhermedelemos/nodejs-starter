const {
    cpf
} = require('cpf-cnpj-validator');

const generateCpf = function (request, h) {
    return {
        cpf: cpf.generate()
    };
};

const validateCpf = function (request, h) {
    return {
        isValid: cpf.isValid(request.params.cpf) === true
    };
};

module.exports = {
    generateCpf,
    validateCpf
}