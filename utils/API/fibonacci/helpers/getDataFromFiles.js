const { evalJs, evalPy } = require('../../../../scripts/evalFibonacci');
const { DATA_FOLDER, MAX_FIB_NUMBER } = require('../../../constants');
const readFile = require('../../../readFile');
const path = require('path');


/**
 * Ensures that the nthNumber is a number and is within the range we compute for the fibonacci sequence.
 * If no number or invalid input is provided, then the default value of the maximum number is returned.
 * @param {number|string} nthNumber The desired nth number in the fibonacci sequence.
 * @returns {number} The normalized nthNumber.
 */
function normalizeNthNumber(nthNumber = MAX_FIB_NUMBER) {
    const regex = /\d+/;
    const isNumber = regex.test(nthNumber);
    const isLower = nthNumber <= MAX_FIB_NUMBER;

    return isNumber && isLower ? Number(nthNumber) : MAX_FIB_NUMBER;
}

/**
 * Reads the data files containing the nth fibonacci number and the time taken to
 * compute it for each language. If the number hasn't been computed yet, then this
 * could take 1-2 minutes to complete depending on the size of the number and the
 * speed of the processor. The reason is that each test is iterative and contains
 * un-optimized solutions(recursion). Meaning that if the nth number is say 100,
 * then the functions are invoked for 0,1,2...,100 and the performance measured.
 * The un-optimized recursive functions are limited to n = 40. This is still enough
 * to show that the time complexity is exponential.
 *
 * @param {number|string} nthNumber The desired nth number in the fibonacci sequence.
 * @returns {object} An object containing the data for the nth fibonacci number and the
 *  time taken to compute it for each language.
 * ```javascript
 *   // Example output:
 *   {
 *      js: {recursiveMemoized:{result:0, timeInSeconds:0},...},
 *      py: {recursive_memoized:{result:0, timeInSeconds:0},...}
 *   }
 * ```
 */
async function getDataFromFiles(nthNumber) {
    nthNumber = normalizeNthNumber(nthNumber);
    try {
        // eval functions expect an array of arguments
        const args = [nthNumber];
        // if data already has been computed for nthNumber
        // the eval functions do nothing
        await evalJs(args);
        await evalPy(args);

        // locations of the data
        const pyPath = path.join(DATA_FOLDER, 'python', `fib-py-${nthNumber}.json`);
        const jsPath = path.join(DATA_FOLDER, 'javascript', `fib-js-${nthNumber}.json`);

        return { js: JSON.parse(readFile(jsPath)), py: JSON.parse(readFile(pyPath)) };

    } catch (error) {
        return error;
    }
}

module.exports = { getDataFromFiles, normalizeNthNumber };
