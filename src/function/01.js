/**
 * @description
 * Introduction to functions
 */

function generateNewToken (userId, currentDate) {
  return `token/${userId}/${currentDate}`;
}

const token = generateNewToken(10, Date.now());
console.log(token);

/**
 * Print data functions
 */

function printElements (list) {
  console.log('List:', list);
}

const shoppingList = [
  'apples',
  'carrots',
  'wine',
  'potatoes'
];

printElements(shoppingList);

/**
 * Basic addition function
 */

function addNumbers (a, b) {
  return a + b;
}

let someNumber = 0;

someNumber += addNumbers(0, 3);
someNumber += addNumbers(1, 2);
console.log(someNumber);
