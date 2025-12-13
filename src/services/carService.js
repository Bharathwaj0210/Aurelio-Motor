import carsData from "../api/cars.json";

export const getAllCars = () => {
  return carsData.cars;
};

export const getCarById = (id) => {
  return carsData.cars.find((car) => car.id === Number(id));
};
