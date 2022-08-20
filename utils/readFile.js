const fs = require('fs');

const readFile = _path => fs.readFileSync(_path, 'utf8');

module.exports = readFile;
