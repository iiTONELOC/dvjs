export const AVAILABLE_DATA_SETS = {
    RECURSIVE: 'recursive',
    ITERATIVE: 'iterative',
    BINETS_FORMULA: 'binets_formula',
    // FULL_RECURSIVE: 'full_recursive',
    // FULL_NON_RECURSIVE: 'full_non_recursive',
    RECURSIVE_OPTIMIZED: 'recursive_optimized'
};

const legend = { title: { color: 'white' } };
const yaxis = { title: 'time in seconds' };
const xaxis = { title: 'n' };

const defaultFibLayout = {
    ...legend,
    ...xaxis,
    ...yaxis,
};

export const defaultDataSets = {
    [AVAILABLE_DATA_SETS.RECURSIVE]: {
        data: [],
        layout: {
            ...defaultFibLayout,
            title: 'Recursive'
        }
    },
    [AVAILABLE_DATA_SETS.ITERATIVE]: {
        data: [], layout: {
            ...defaultFibLayout,
            title: 'Iterative'
        }
    },
    [AVAILABLE_DATA_SETS.RECURSIVE_OPTIMIZED]: {
        data: [], layout: {
            ...defaultFibLayout,
            title: 'Recursive Optimized'
        }
    },
    // [AVAILABLE_DATA_SETS.FULL_NON_RECURSIVE]: {
    //     data: [], layout: {
    //         ...defaultFibLayout,
    //         title: 'Full Non Recursive'
    //     }
    // },
    [AVAILABLE_DATA_SETS.BINETS_FORMULA]: {
        data: [], layout: {
            ...defaultFibLayout,
            title: 'Binet\'s Formula'
        }
    },
    // [AVAILABLE_DATA_SETS.FULL_RECURSIVE]: {
    //     data: [], layout: {
    //         ...defaultFibLayout,
    //         title: 'Full Recursive'
    //     }
    // }
};

