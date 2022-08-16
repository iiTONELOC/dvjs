// Fibonacci Sequence

const fibIterative = n => {
    if (n < 2) return n;

    let a = 0, b = 1, f = 1;
    for (let i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return BigInt(f);
};

const fibRecursive = n => {
    if (n < 2) return BigInt(n);
    return BigInt(fibRecursive(n - 1)) + BigInt(fibRecursive(n - 2));
};

const fibRecursiveMemoized = (n, memo = {}) => {
    if (n < 2) return n;
    if (memo[n]) return memo[n];
    memo[n] = BigInt(fibRecursiveMemoized(n - 1, memo)) + BigInt(fibRecursiveMemoized(n - 2, memo));
    return memo[n];
};

const fibBinetsFormula = n => {
    const SQRT_FIVE = 2.23606797749979;
    // (1 + SQRT_FIVE) / 2
    const FIRST_TERM = 1.618033988749895;
    // (1 - SQRT_FIVE) / 2
    const SECOND_TERM = -0.6180339887498949;

    return BigInt(Math.round(((Math.pow(FIRST_TERM, n) - Math.pow(SECOND_TERM, n)) / SQRT_FIVE)));
};



function main(numberInSequence) {
    let startTime, endTime, result = null;

    const results = {};
    const maxFibNumber = 1400;
    const numberOfSampleTests = 2;
    const secondsInMilliseconds = 1000;
    const maxFibNumberForBasicRecursion = 40;
    const functions = [fibIterative, fibRecursive, fibBinetsFormula, fibRecursiveMemoized];

    numberInSequence = numberInSequence || maxFibNumber;

    function evaluate(_function, nthNumber) {
        startTime = performance.now();
        result = String(_function(nthNumber));
        endTime = performance.now();
    }

    for (const _function of functions) {// NOSONAR
        for (let i = 0; i < numberOfSampleTests; i++) {
            startTime = null;
            endTime = null;
            result = null;

            if (_function.name === 'fibRecursive') {
                numberInSequence <= maxFibNumberForBasicRecursion && evaluate(_function, numberInSequence);
            } else {
                evaluate(_function, numberInSequence);
            }

            const timeInSeconds = (startTime && endTime) ?
                (endTime - startTime) / secondsInMilliseconds : null;

            results[_function.name] = results[_function.name] || [];

            results && results[_function.name]
                .push({ result, timeInSeconds: String(timeInSeconds) });

        }
    }

    return results;
}

const args = process.argv.slice(2);


if (args.length > 0) {
    process.stdout.write(JSON.stringify(main(args[0]), null, 2));
} else {
    module.exports = {
        fibonacci: nthNum => fibBinetsFormula(nthNum),
        fibIterative,
        fibRecursive,
        fibBinetsFormula,
        fibRecursiveMemoized
    };
}


