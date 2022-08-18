const path = require('path');
const { runJsScript, runPyScript } = require('./_utils');
const { MAX_FIB_NUMBER, LIB_FOLDER } = require('../utils/constants');

const argIndex = 2;
const arg = process.argv.slice(argIndex)[0] || MAX_FIB_NUMBER;
const args = [arg <= MAX_FIB_NUMBER ? arg : MAX_FIB_NUMBER];
const pyLocation = path.join(LIB_FOLDER, 'python', 'fibonacci.py');
const jsLocation = path.join(LIB_FOLDER, 'javascript', 'fibonacci.js');


// only run if being called as a script
if (require.main === module) {
    process.stdout.write(`This could take a literal minute or more please be patient...\n`);
    (async () => {
        await runJsScript(jsLocation, args);
        await runPyScript(pyLocation, args);
    })();
}

// API
module.exports = {
    evalJs: _args => runJsScript(jsLocation, _args),
    evalPy: _args => runPyScript(pyLocation, _args)
};
