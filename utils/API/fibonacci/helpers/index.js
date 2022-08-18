const { filterDataSets, FILTER_BY } = require('./filterDataSets');
const { getDataFromFiles, normalizeNthNumber } = require('./getDataFromFiles');
const { genFibTimeComplexityData } = require('./genFibTimeComplexityData');

module.exports = {
    FILTER_BY,
    filterDataSets,
    getDataFromFiles,
    normalizeNthNumber,
    genFibTimeComplexityData
};
