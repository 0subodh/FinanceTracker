export const errorHandler = (err, req, res, next) => {
  // set default status code and message
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Err";

  // send Error response
  res.status(statusCode).json({
    status: "error",
    message,
  });
};
