


const successResponse = (res, entity, message, status) => {
  if (entity) {
    res.status(status || 200).json(
      {
        error: null,
        data: entity,
        message: message
      }
    );
  } else {
    return;
  }
};
const errorResponse = (res,message, status) => {
  return res.status(status || 400).json({
    error: true,
    message: message,
    data: []
  });
}
module.exports = {
  successResponse,
  errorResponse
}