import { AVAILABLE_DATA_SETS } from './defaults';
import { FetchFromAPI } from '../../../utils/API/FetchFromAPI';

const fetchController = {
    // recursive not listed, data comes from serverSideProps
    [AVAILABLE_DATA_SETS.BINETS_FORMULA]: async () => FetchFromAPI('algos/fibonacci/binets'),
    [AVAILABLE_DATA_SETS.ITERATIVE]: async () => FetchFromAPI('algos/fibonacci/iterative'),
    // [AVAILABLE_DATA_SETS.FULL_RECURSIVE]: () => FetchFromAPI('algos/fibonacci/full-recursive'),
    // [AVAILABLE_DATA_SETS.FULL_NON_RECURSIVE]: () => FetchFromAPI('algos/fibonacci/full-non-recursive'),
    [AVAILABLE_DATA_SETS.RECURSIVE_OPTIMIZED]: async () => FetchFromAPI('algos/fibonacci/recursive-memoized')
};


export async function dataFetchController(dataset) {
    switch (dataset) {
        case AVAILABLE_DATA_SETS.ITERATIVE:
            return fetchController[dataset]();
        case AVAILABLE_DATA_SETS.BINETS_FORMULA:
            return fetchController[dataset]();
        // case AVAILABLE_DATA_SETS.FULL_RECURSIVE:
        //     return fetchController[dataset]();
        // case AVAILABLE_DATA_SETS.FULL_NON_RECURSIVE:
        //     return fetchController[dataset]();
        case AVAILABLE_DATA_SETS.RECURSIVE_OPTIMIZED:
            return fetchController[dataset]();
        default:
            return null;
    }
}
