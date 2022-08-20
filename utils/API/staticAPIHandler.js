import statusCodes from './statusCodes';

const { OK, INTERNAL_SERVER_ERROR } = statusCodes;

/**
 * Reusable API handler for static API routes.

 * @param {object} _req Request object.
 * @param {object} res Response object.
 * @param {function} dataCaller Not quite a callback. The dataCaller is function that
 * fetches the necessary data from the files.
 * @returns {object} Returns the response object.
 */
export default async function staticAPIHandler(_req, res, dataCaller) {
    try {
        const data = JSON.parse(await dataCaller());
        return res.status(OK.code).json(data);
    } catch (error) {
        return res
            .status(INTERNAL_SERVER_ERROR.code)
            .json({ error: error.message });
    }
}

export { staticAPIHandler };
