const fs = require('fs');
const checkIfFileExists = fileName => fs.existsSync(fileName);
const writeToFileAsJson = (results, fileName) => {
    if (!checkIfFileExists(fileName)) {
        fs.writeFileSync(fileName, JSON.stringify(results));
    }
};

module.exports = {
    checkIfFileExists,
    writeToFileAsJson
};
