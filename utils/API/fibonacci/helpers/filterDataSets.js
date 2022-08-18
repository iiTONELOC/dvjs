const FILTER_BY = {
    'RECURSIVE': 'recursive',
    'ITERATIVE': 'iterative',
    'BINETS': 'binets',
    'RECURSIVE_MEMOIZED': 'recursiveMemoized',
    'LANGUAGE': 'language'
};

const filterBinets = item => item.name === 'binets';
const filterLanguage = item => item.name === 'language';
const filterRecursive = item => item.name === 'recursive';
const filterIterative = item => item.name === 'iterative';
const filterRecursiveMemoized = item => item.name === 'recursiveMemoized';


function filterData(filterBy, dataset) {
    switch (filterBy) {
        case FILTER_BY.RECURSIVE:
            return filterRecursive(dataset);
        case FILTER_BY.ITERATIVE:
            return filterIterative(dataset);
        case FILTER_BY.BINETS:
            return filterBinets(dataset);
        case FILTER_BY.RECURSIVE_MEMOIZED:
            return filterRecursiveMemoized(dataset);
        case FILTER_BY.LANGUAGE:
            return filterLanguage(dataset);
        default:
            return filterRecursive(dataset);
    }
}

function filterDataSets(_filter, _dataSets) {
    _filter = [Object.values(FILTER_BY)].includes(_filter) ? _filter : FILTER_BY.RECURSIVE;
    return [...Object.values(_dataSets)].filter(el => filterData(_filter, el));
}

module.exports = { FILTER_BY, filterDataSets };
