import { fibonacciBinets, staticAPIHandler } from '../../../../../../utils/API';


// 'api/algos/fibonacci/Binets'
export default async function handler(req, res) {
    return staticAPIHandler(req, res, fibonacciBinets);
}
