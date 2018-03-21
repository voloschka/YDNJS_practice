/**
 * @description
 * Working with object properties
 */

 const cartItem = {
  name: 'camera',
  id: 10,
  'price': 200
 };

/**
 * Access to property using dot notation
 */

cartItem.price;

/**
 * Acesss to object's property using string notation
 */

cartItem['id'];

cartItem['price'];

/**
 * Deleting object's property
 */

delete cartItem.name;
console.log(cartItem);
