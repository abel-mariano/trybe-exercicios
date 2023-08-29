const Joi = require('joi');

const addCarSchema = Joi.object({
  model: Joi.string().min(3),
  color: Joi.string().min(2),
  licensePlate: Joi.string().length(7),
  year: Joi.number().integer(),
  driverId: Joi.number(),
});

const updateCarSchema = Joi.object({
  model: Joi.string(),
  color: Joi.string(),
  licensePlate: Joi.string(),
  year: Joi.number().integer().max(new Date().getFullYear()),
  driverId: Joi.number().integer(),
});

module.exports = {
  addCarSchema,
  updateCarSchema,
};