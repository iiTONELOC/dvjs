import { fibonacciFull, staticAPIHandler } from '../../../../../../utils/API';


// 'api/algos/fibonacci/full'
export default async function handler(req, res) {
    return staticAPIHandler(req, res, fibonacciFull);
}
