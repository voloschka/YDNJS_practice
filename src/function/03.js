/**
 * @description
 * Types of functions
 * Declaration
 * Exzpression
 * Difference between types
 */

const item = {
  price: 200,
  getTitle: function () {
    return 'camera';
  }
};

console.log(makeList(item));

function makeList (item) {
  return [item];
}

const getItemPrice = function (item) {
  return item.price;
};

console.log(getItemPrice(item));
