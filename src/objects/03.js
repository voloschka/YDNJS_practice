/**
 * @description
 * Working with iterating over object's properties
 */

const car = {
  power: 2.2,
  doorCount: 5,
  gearType: 'auto',
  isVehicleRunning: false
};

const carKeys = Object.keys(car); // []

carKeys.forEach(function(key) {
  const value = car[key];
  console.log(`Key: ${key}, Value: ${value}`);
});

/**
 * Example of minimalistic code approach
 */

Object.keys(car).forEach(key => console.log(`Key: ${key}, Value: $car[key}`));
