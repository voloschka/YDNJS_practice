const myWishList = ['powder'];
console.log(myWishList);

myWishList.push('lipstick', 'mascara', 'foundation');
console.log(myWishList);

myWishList.pop();
console.log(myWishList);

console.log(myWishList[0]);
console.log(typeof myWishList[0]);

let isArray = Array.isArray('myWishList');
console.log(isArray);

myWishList.splice(myWishList.indexOf('mascara'), 1);
console.log(myWishList);

myWishList.forEach(function(value, index) {
  console.log('Element:', value, index); 
});

const modifiedWishlist = myWishList.map(function(value, index){
  return value + 'A';
});
console.log(modifiedWishlist);

const houndScoper = [
  'dog',
  12,
  null,
  undefined,
  NaN,
  {},
  [
    1
  ],
  function() {
    //
  }
];
console.log(houndScoper);

houndScoper.forEach(function(value) {
  console.log('Type of element:', typeof value);

  if (Array.isArray(value)) {
    console.log('This is surely an array:', value);
  }
});
