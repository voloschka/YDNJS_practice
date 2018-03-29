let result;

// arrow function syntax
const arrowExample = () => {
  //
};

// simplified hack
const myArrow = a => a * a;

result = myArrow(2);
console.log(result);

// simplified hack with object
const otherArrow = (a, b) => ({ c: myArrow(a), d: myArrow(b) });

result = otherArrow(2, 3);
console.log(result);

// practice
const todaysDate = () => {
  return new Date().toString()
};

result = todaysDate();
console.log(result);

const myPI = () => {
  return Math.PI;
};

result = myPI();
console.log(result);

const myMath = x => Math.floor(x);

result = myMath(26.756);
console.log(result);

const myArray = [1, 2, 3];
myArray.forEach(function(val, num) {
  console.log('Value:', val, 'Number:', num);
});

myArray.forEach((val, num) => console.log('Value:', val, 'Number:', num));

const mySecondArray = myArray.map(y => y * 2);
console.log(mySecondArray);
