exports.createErrors = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        message: err.message,
        stack: err.stack,
    })
}