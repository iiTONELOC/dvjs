const FILTER_BY = {
    'RECURSIVE': 'recursive',
    'ITERATIVE': 'iterative',
    'BINETS': 'binets',
    'RECURSIVE_MEMOIZED': 'recursiveMemoized'
};

//HERE
export const formatName = item => item.toLowerCase().replace(/_/g, ' ').replace('fib', '').trim();

const filterBinets = item => item.toLowerCase().includes('binets');
const filterRecursive = item => formatName(item) === 'recursive';
const filterIterative = item => formatName(item) === 'iterative';
const filterRecursiveMemoized = item => formatName(item) === 'recursivememoized' ||
    formatName(item) === 'recursive memoized';


function filterData(filterBy, name) {
    switch (filterBy) {
        case FILTER_BY.RECURSIVE:
            return filterRecursive(name);
        case FILTER_BY.ITERATIVE:
            return filterIterative(name);
        case FILTER_BY.BINETS:
            return filterBinets(name);
        case FILTER_BY.RECURSIVE_MEMOIZED:
            return filterRecursiveMemoized(name);
        default:
            return filterRecursive(name);
    }
}

function filterDataSets(_filter, _dataSets) {
    const filtered = [];

    _filter = Object.values(FILTER_BY)
        .includes(_filter) ? _filter : FILTER_BY.RECURSIVE;

    for (const data of Object.values(_dataSets)) {
        for (const [name, dataSet] of Object.entries(data)) {
            filterData(_filter, name) && filtered.push({
                [name.includes('_') ? 'Python' : 'JavaScript']: dataSet
            });
        }
    }
    return filtered;
}

module.exports = { FILTER_BY, filterDataSets };
