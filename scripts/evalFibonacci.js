const path = require('path');
const { runJsScript, runPyScript } = require('./_utils');

const maxFibNumber = 1474;
const arg = process.argv.slice(2)[0] || maxFibNumber;
const args = [arg <= maxFibNumber ? arg : maxFibNumber];

const libLocation = path.join(process.cwd(), 'lib');
const jsLocation = path.join(libLocation, 'javascript', 'fibonacci.js');
const pyLocation = path.join(libLocation, 'python', 'fibonacci.py');


// only run if being called as a script
if (require.main === module) {
    process.stdout.write(`This could take a literal minute or more please be patient...\n`);
    (async () => {
        await runJsScript(jsLocation, args);
        await runPyScript(pyLocation, args);
    })();
}

module.exports = {
    evalJs: _args => runJsScript(jsLocation, _args),
    evalPy: _args => runPyScript(pyLocation, _args)
};

