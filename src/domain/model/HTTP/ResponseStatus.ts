const ResponseStatus = {
  OK: 200,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_USER: 403,
  NOT_FOUND: 404,
  GENERAL_ERROR: 409,
  SERVER_ERROR: 500,
};

const HTTP_SUCCESS_STATUS = [ResponseStatus.OK, ResponseStatus.NO_CONTENT];

export { HTTP_SUCCESS_STATUS, ResponseStatus };
