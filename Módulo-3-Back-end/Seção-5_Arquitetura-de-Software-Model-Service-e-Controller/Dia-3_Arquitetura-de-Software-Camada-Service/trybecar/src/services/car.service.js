const { carModel, driverModel } = require('../models');
const { validateNewCar, validateUpdateCar } = require('./validations/validationsInputValues');

const driverExists = async (driverId) => {
  const driver = await driverModel.findById(driverId);
  return driver || false;
};

const createCar = async ({ model, licensePlate, year, color, driverId }) => {
  const error = validateNewCar(model, color, year, licensePlate, driverId);
  if (error) return { status: error.status, data: { message: error.message } };

  const driver = await driverExists(driverId);
  if (!driver) return { status: 'NOT_FOUND', data: { message: 'Driver not found' } };

  const carId = await carModel.insert({ model, licensePlate, year, color, driverId });
  const newCar = { id: carId, model, licensePlate, year, color, driverId };
  return { status: 'SUCCESSFUL', data: newCar };
};

const findAll = async () => {
  const cars = await carModel.findAll();
  return { status: 'SUCCESSFUL', data: cars };
};

const updateCar = async (carId, { model, licensePlate, year, color, driverId }) => {
  const invalidValue = validateUpdateCar(model, licensePlate, year, color, driverId);
  if (invalidValue) {
    return { status: 'INVALID_DATA', message: invalidValue.message };
  }

  const carExists = await carModel.findById(carId);
  if (!carExists) {
    return { status: 'NOT_FOUND', message: 'Car not found' };
  }

  if (driverId && carExists.driverId !== driverId) {
    return { status: 'INVALID_DATA', message: 'Cannot update car owner' };
  }

  await carModel.update(carId, { model, licensePlate, year, color });
  const updatedCar = await carModel.findById(carId);
  return { status: 'SUCCESSFUL', data: updatedCar };
};

const findById = async (carId) => {
  const car = await carModel.findById(carId);
  if (!car) return { status: 'NOT_FOUND', data: { message: 'Car not found' } };

  return { status: 'SUCCESSFUL', data: car };
};

module.exports = {
  createCar,
  findAll,
  updateCar,
  findById,
};