const logger = require('../helpers/logger');

module.exports = (req, res, next) => {
  logger.info(`REQUEST: id=[${req.id}]\
    method=${req.method}\
    startTime=[${req.time.toUTCString()}]\
    originalUrl=${req.originalUrl}\
    referer=${req.headers.referer}\
    user-agent=${req.headers['user-agent']}`);

  res.on('finish', () => {
    logger.info(`RESPONSE: id=[${req.id}]\
        statusCode=${res.statusCode}\
        statusMessage=${res.statusMessage}\
        processTime=${Date.now() - req.time.getTime()}\
        ${res.get('Content-Length') || 0}b sent`);
  });

  next();
};
