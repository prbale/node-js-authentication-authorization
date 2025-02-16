/**
 * Global error handler middleware.
 *
 * @param {Error} err - The error object.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Next middleware function.
 */
const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    // Log the error (consider using a logging library like winston)
    console.error(`Error: ${err.message}`);

    res.status(statusCode).json({
        message: err.message || "Internal Server Error",
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
};

module.exports = errorHandler;
