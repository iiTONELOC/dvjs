import { fibonacciRecursiveMemoized, staticAPIHandler } from '../../../../../../utils/API';

// 'api/algos/fibonacci/recursive-memoized'
export default async function handler(req, res) {
    return staticAPIHandler(req, res, fibonacciRecursiveMemoized);
}
