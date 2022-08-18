export default function fibData(data) {
    const dataSets = [];
    let currentIndex = 0;
    data = Object.fromEntries(Object.entries(data));

    for (const key of Object.keys(data)) {
        const programmingLanguage = data[key];

        for (const _key of Object.keys(programmingLanguage)) {
            const current = programmingLanguage[_key];

            for (const [algo, results] of Object.entries(current)) {
                const newEntry = { x: [], y: [], type: 'scatter', name: algo };

                results.map((entry, i) => {
                    newEntry.y.push(i);
                    newEntry.x.push(Number(entry.timeInSeconds.toFixed(20)));
                });

                dataSets.push(newEntry);
                currentIndex++;
            }
        }
    }
    console.log(dataSets);
    return { dataSets };
}
