import { fibonacciRecursive, staticAPIHandler } from '../../../../../../utils/API';

// 'api/algos/fibonacci/recursive'
export default async function handler(req, res) {
    return staticAPIHandler(req, res, fibonacciRecursive);
}
