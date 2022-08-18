import { fibonacciFull, statusCodes } from '../../../../../../utils/API';

const { OK, INTERNAL_SERVER_ERROR } = statusCodes;

// 'api/algos/fibonacci/full-comparison'
export default async function handler(_, res) {
    try {
        const data = await fibonacciFull();
        return res.status(OK.code).json({ data });
    } catch (error) {
        return res
            .status(INTERNAL_SERVER_ERROR.code)
            .json({ error: error.message });
    }
}
