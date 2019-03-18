class Environment {
    static get PRODUCTION() {
        return 'production';
    }
    static get DEVELOPMENT() {
        return 'development';
    }
    static isProduction() {
        return process.env.NODE_ENV === this.PRODUCTION;
    }
    static isDevelopment() {
        return process.env.NODE_ENV === this.DEVELOPMENT;
    }
    static get ENV() {
        return process.env.NODE_ENV;
    }
}
module.exports = Environment;