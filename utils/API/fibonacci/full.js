const { getDataFromFiles, normalizeNthNumber } = require('./helpers');

/**
     * Calculates the nth number of the fibonacci sequence. And returns the full data set.
     * @param {number|undefined} nthNumber - The nth number in the fibonacci sequence.
     * Defaults to the maximum number we can compute in the sequence, 1474.
     * @returns {object}
     *  // Example output:
     * ```javascript
     *  {
     *     js: {recursiveMemoized:{result:0, timeInSeconds:0},...},
     *     py: {recursive_memoized:{result:0, timeInSeconds:0},...}
     *  }
     * ```
     */
async function full(nthNumber) {
    nthNumber = normalizeNthNumber(nthNumber);
    try {
        return getDataFromFiles(nthNumber);
    } catch (error) {
        return error;
    }
}

module.exports = full;
