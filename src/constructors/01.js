// object literal
const car1 = {
  model: 'Opel',
  price: 5000,
  power: 1.6,
  isAvailable: true
};

// Constructor
function Car () {
  this.model = 'Mazda';
  this.price = 7000;
  this.power = 3.6;
  this.isAvailable = true;
}

// instance/object constructed from class/constructor Car
const car2 = new Car();
console.log(car1, car2);
