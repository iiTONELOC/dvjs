/**
 * This should only be ran on the client and not on the server.
 * This helper function adds a significant amount of data to the dataSet
 * and we dont want to send that data over the network.
 *
 * Formats the data returned from the api call into a format that Plotly.js can use.
 * @param {object} data object returned from the API CALL
 * @returns {object}
 */
function genFibTimeComplexityData(data) {
    const dataSets = [];
    let currentIndex = 0;
    data = Object.fromEntries(Object.entries(data));

    for (const language of Object.keys(data)) {
        const currentLanguage = data[language];

        for (const [algo, results] of Object.entries(currentLanguage)) {

            const newEntry = { x: [], y: [], type: 'scatter', name: algo, mode: 'lines+markers' };
            // we want to show time complexity, so the x axis is the nth number
            // and the y axis is the time taken to compute the nth number
            results.map((entry, i) => {
                newEntry.y.push(Number(entry.timeInSeconds));
                newEntry.x.push(i);
            });
            dataSets.push(newEntry);
            currentIndex++;
        }
    }
    return { dataSets };
}

module.exports = { genFibTimeComplexityData };
