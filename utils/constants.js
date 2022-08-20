const path = require('path');

const CWD = process.cwd();
const MAX_FIB_NUMBER = 1474;
const LIB_FOLDER = path.join(CWD, 'lib');
const DATA_FOLDER = path.join(CWD, 'data', 'fibonacci');
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const URL_PREFIX = IS_PRODUCTION ? 'https://hairy-turtle.herokuapp.com/api/' : 'http://localhost:3000/api/';

module.exports = {
    CWD,
    URL_PREFIX,
    LIB_FOLDER,
    DATA_FOLDER,
    IS_PRODUCTION,
    MAX_FIB_NUMBER
};
