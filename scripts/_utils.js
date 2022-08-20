const { spawn } = require('child_process');
const path = require('path');



function print(message) {
    process.stdout.write(`${message}\n`);
}

async function run(command, pathToFile, args) {

    const child = spawn(command, [pathToFile, ...args]);

    //return a promise that resolves when the child process exits
    return new Promise((resolve, reject) => {
        child
            .on('error', err => {
                reject(new Error(err));
            }).on('message', message => {
                print(message);
            }).on('close', () => {
                print(`Script ${path.basename(pathToFile)} exited successfully`);
                resolve(true);
            }).on('disconnect', () => {
                print(`Script ${path.basename(pathToFile)} disconnected`);
            });
    });
}
async function runScript(command, pathToFile, args) {
    //spawn a child process using the script path and arguments
    print(`Running ${path.basename(pathToFile)} with ${args.join(', ')}`);
    await run(command, pathToFile, args);

}


async function runJsScript(pathToScript, args) {
    return runScript('node', pathToScript, args).catch(err => {
        print(err);
    });
}

async function runPyScript(pathToScript, args) {
    return runScript('py', pathToScript, args).catch(err => {
        print(err);
    });
}

module.exports = {
    runScript,
    runJsScript,
    runPyScript
};
