/**
 * @description
 * Working with callbacks
 */

let itemPrice = 0;

// 1 expression
const setNewPrice = function () {
  itemPrice = 314.19;
};

function getInfo(callback) {
  callback(); // call expression (1)
}

getInfo(setNewPrice); // expression as parameter

console.log(itemPrice); // 314.19
