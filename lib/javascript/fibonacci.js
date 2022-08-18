// imports
const fs = require('fs');
const path = require('path');
const { writeToFileAsJson, checkIfFileExists } = require('./utils');

// constants
const maxFibNumber = 1474;
const args = process.argv.slice(2);
const secondsInMilliseconds = 1000;
const maxFibNumberForBasicRecursion = 45;
const dataFolder = path.join('data', 'fibonacci', 'javascript');

// fibonacci sequence algorithms
const fibIterative = n => {
    if (n < 2) return n;

    let a = 0, b = 1, f = 1;
    for (let i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};

const fibRecursive = n => {
    if (n < 2) return n;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
};

const fibRecursiveMemoized = (n, memo = {}) => {
    if (n < 2) return n;
    if (memo[n]) return memo[n];
    memo[n] = fibRecursiveMemoized(n - 1, memo) + fibRecursiveMemoized(n - 2, memo);
    return memo[n];
};

const fibBinetsFormula = n => {
    const SQRT_FIVE = 2.23606797749979;
    // (1 + SQRT_FIVE) / 2
    const FIRST_TERM = 1.618033988749895;
    // (1 - SQRT_FIVE) / 2
    const SECOND_TERM = -0.6180339887498949;

    if (n < 2) return n;

    return Math.round(((Math.pow(FIRST_TERM, n) - Math.pow(SECOND_TERM, n)) / SQRT_FIVE));
};

function calculate(_function, n) {
    const startTime = performance.now();
    const result = _function(n);
    const endTime = performance.now();
    const timeInSeconds = (startTime && endTime) ?
        (endTime - startTime) / secondsInMilliseconds : null;

    return { result, timeInSeconds };
}

function evaluate(_function, n) {
    return _function.name === 'fibRecursive' ?
        n <= maxFibNumberForBasicRecursion && calculate(_function, n) :
        calculate(_function, n);
}

// finds the numberInSequence for each algorithm and writes the results to a file
// not exported because the python scripts will have to be run separately anyways
function main(numberInSequence) {
    const results = {};
    const functions = [fibIterative, fibRecursive, fibBinetsFormula, fibRecursiveMemoized];
    const fileName = path.join(process.cwd(), dataFolder, `fib-js-${numberInSequence}.json`);

    numberInSequence = numberInSequence || maxFibNumber;

    if (!checkIfFileExists(fileName)) {
        for (const _function of functions) {// NOSONAR
            for (let n = 0; n < numberInSequence; n++) {
                const data = evaluate(_function, n);

                results[_function.name] = results[_function.name] || [];

                data && results[_function.name]
                    .push(data);
            }
        }
        // write the results to a file
        writeToFileAsJson(results, fileName);
    }
}


if (args.length > 0) {
    main(args[0]);
} else {
    module.exports = {
        /**
         * Finds the nth number in the Fibonacci Sequence using Binet's Formula
         *  @param {number} nthNumber - The nth number in the sequence
         * @return {BigInt|Infinity}  BigInt if calculation doesn't overflow, Infinity otherwise.
         *  Overflow will occur when n > 1474.
         */
        fibonacci: nthNum => fibBinetsFormula(nthNum),
        fibIterative,
        fibRecursive,
        fibBinetsFormula,
        fibRecursiveMemoized
    };
}
