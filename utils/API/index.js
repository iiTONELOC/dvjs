const fibonacci = require('./fibonacci');
const statusCodes = require('./statusCodes');
const { FetchFromAPI } = require('./FetchFromAPI');
const { staticAPIHandler } = require('./staticAPIHandler');





module.exports = {
    statusCodes,
    ...fibonacci,
    FetchFromAPI,
    staticAPIHandler
};
