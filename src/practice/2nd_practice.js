/**
 * @description
 * Creating a module that will return different formatted data
 * Task: Create a global object that holds different methods
 */

const dataUtils = {
  todaysDate: function () {
    let today = new Date();
    today = today.toString();
    return today;
  }
};

const today = dataUtils.todaysDate();

console.log(today);

function empty () {
  // empty function returns undefined
}

console.log('Value from empty function', empty());

/**
 * Create an array of objects, each of which will have 2 properties with values of the same type
 */

const myShoppingCart = [
  {
    name: 'potatoes',
    checkAvailability: function () {
      return true;
    }
  },
  {
    name: 'carrots',
    checkAvailability: function () {
      return false;
    }
  }
];

function getShoppingCartInfo (cart) {  // []
  cart.forEach(function (currentValue) {  // string
    console.log(`Item name: ${currentValue.name}`)
  });
}

getShoppingCartInfo(myShoppingCart);
