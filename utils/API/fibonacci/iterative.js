const {
    FILTER_BY,
    filterDataSets,
    getDataFromFiles,
    normalizeNthNumber
} = require('./helpers');

/**
     * Calculates the nth number of the fibonacci sequence. And returns the iterative data set.
     * @param {number|undefined} nthNumber - The nth number in the fibonacci sequence.
     * Defaults to the maximum number we can compute in the sequence, 1474.
     * Maximum recursively (for time reasons) is n = 40.
     * @returns {object}
     *  // Example output:
     * ```javascript
     *  {
     *     js: {recursiveMemoized:{result:0, timeInSeconds:0},...},
     *     py: {recursive_memoized:{result:0, timeInSeconds:0},...}
     *  }
     * ```
     */
async function iterative(nthNumber) {
    nthNumber = normalizeNthNumber(nthNumber);
    try {
        const data = await getDataFromFiles(nthNumber);
        return JSON.stringify(filterDataSets(FILTER_BY.ITERATIVE, data));
    } catch (error) {
        return error;
    }
}

module.exports = iterative;
