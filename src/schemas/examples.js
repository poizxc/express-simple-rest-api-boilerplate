// In This directory I store all the validation schemas
// My validation middleware can check three things: params, query parameters and body
// eg.
// {
//    body: {
//      smth: Joi.string().required(),
//    },
//    query: {
//      smth: Joi.number().required(),
//    },
//    params: {
//      smth: Joi.number().integer().min(1).max(10).required(),
//    },
// };
const Joi = require('@hapi/joi');

const examplePostSchema = {
  body: {
    title: Joi.string().required(),
  },
};

module.exports = {
  examplePostSchema,
};
