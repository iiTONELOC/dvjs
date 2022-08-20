const { filterDataSets, FILTER_BY } = require('./filterDataSets');
const { genFibTimeComplexityData } = require('./genFibTimeComplexityData');
const { getDataFromFiles, normalizeNthNumber } = require('./getDataFromFiles');



module.exports = {
    FILTER_BY,
    filterDataSets,
    getDataFromFiles,
    normalizeNthNumber,
    genFibTimeComplexityData
};
