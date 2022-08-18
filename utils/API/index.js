const { FetchFromAPI } = require('./FetchFromAPI');
const fibonacciFull = require('./fibonacci').full;
const statusCodes = require('./statusCodes');

module.exports = {
    statusCodes,
    FetchFromAPI,
    fibonacciFull
};
