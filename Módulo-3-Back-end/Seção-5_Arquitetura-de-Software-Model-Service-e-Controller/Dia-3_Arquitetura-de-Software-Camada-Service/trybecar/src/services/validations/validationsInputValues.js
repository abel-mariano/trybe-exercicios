const { addCarSchema, updateCarSchema } = require('./schemas');

const validateNewCar = ({ model, licensePlate, year, color, driverId }) => {
  const { error } = addCarSchema
    .validate({ model, licensePlate, year, color, driverId });
  if (error) return { status: 'INVALID_VALUE', message: error.message };
};

const validateUpdateCar = ({ model, licensePlate, year, color, driverId }) => {
  const { error } = updateCarSchema
    .validate({ model, color, licensePlate, year, driverId });
  if (error) return { status: 'INVALID_VALUE', message: error.message };
};

module.exports = {
  validateNewCar,
  validateUpdateCar,
};