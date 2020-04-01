const {cpus} = require('os');

const getEnv = function(environment) {
    /* Threading and such */
    const num_workers = cpus().length;

    if (environment == 'dev') {
        return {
            port: '3001',
            workers: num_workers,
            environment: 'dev'
        }
    };
    if (environment == 'sit') {
        return {
            port: '3001',
            workers: num_workers,
            environment: 'sit'
        };
}
}
module.exports = {
    getEnv   
}