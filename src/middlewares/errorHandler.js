const notifier = require('node-notifier');
const { isDev, isSilent } = require('../config/config');
const { StatusError } = require('../helpers/Errors');

module.exports = (err, req, res, next) => {
  if (isDev && !isSilent) {
    notifier.notify({
      title: 'ERROR',
      message: `Occurred on ${req.method} ${req.originalUrl}`,
    });
  }

  if (err instanceof StatusError) {
    res.status(err.statusCode).send(err.userMessage);
  } else {
    next(err);
  }
};
