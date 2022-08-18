const statusCodes = {
    OK: { code: 200, message: 'OK' },
    CREATED: { code: 201, message: 'Created' },
    ACCEPTED: { code: 202, message: 'Accepted' },
    NO_CONTENT: { code: 204, message: 'No Content' },
    BAD_REQUEST: { code: 400, message: 'Bad Request' },
    UNAUTHORIZED: { code: 401, message: 'Unauthorized' },
    FORBIDDEN: { code: 403, message: 'Forbidden' },
    INTERNAL_SERVER_ERROR: { code: 500, message: 'Internal Server Error' }
}

module.exports = statusCodes;
