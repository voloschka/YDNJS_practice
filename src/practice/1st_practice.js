/**
 * @description
 * Practice task: Item is an object that has properties, create a function that would return its properties in console. 
 * Function needs ot be called twice, as an original and as its clone (or copy).
 */

const cartItem = {
  name: 'potatoes',
  quantity: 10,
  price: 8
};

function showCartItem (item) {
  console.log(item);
}

showCartItem(cartItem);

const itemCopy = Object.assign({}, cartItem);

showCartItem(itemCopy);

/**
 * Task: [], implement function that can push data to array
 */

const itemsHolder = [];

function showItemInArray (item) {
  itemsHolder.push(cartItem);
}

showItemInArray(cartItem);

console.log(itemsHolder);

/**
 * Function that can form url based on the trasferred object that holds host, domain, type of connection, (isSecure), route
 */

const requestOptions = {
  host: 'blyskitka',
  domain: 'com',
  isSecure: true,
  route: 'new-post'
};

function getUrl (options) {
  let protocolType = 'http';

  if (options.isSecure) {
    protocolType = 'https';
  }

  return `${protocolType}://${options.host}.${options.domain}/${options.route}`;
}

const url = getUrl(requestOptions);
console.log('URL:', url);
