class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'User is not authorized');
    }

    static BadRequest(message) {
        return new ApiError(404, message);
    }

    static Internal(message) {
        return new ApiError(500, message);
    }

    static Forbidden(message) {
        return new ApiError(403, message);
    }
}

module.exports = ApiError;