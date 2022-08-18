const { URL_PREFIX } = require('../constants');

/** Fetches data from our API
 * @param {string} URL API endpoint to fetch from
 * @returns {object}  { data, error }
 * @example
 * ```javascript
 * const { data, error } = await FetchFromAPI('algos/fibonacci/full-comparison');
 * ```
 */
async function FetchFromAPI(URL) {
    const response = await fetch(URL_PREFIX + URL);

    const data = await response.json();
    const error = response.ok ? null : new Error(data.message);

    return { data, error };
}

module.exports = {
    FetchFromAPI
};
