const count = 0;

function incrementCount () {
  return count +  1;
}

console.log(incrementCount(), count);

const name = 'Monica';

function nameUppercase () {
  return `Name: ${name.toUpperCase()}`;
}
console.log(nameUppercase());

function objectReturn () {
  return {
    name,
    count
  }
}

console.log(objectReturn());

function returnArray () {
  return [
    objectReturn()
  ];
}

console.log(returnArray());

function returnFunction () {
  return returnArray;
}

const functionResult = returnFunction()()[0].name;
console.log(functionResult);

(function () {
  log();
  console.log('This is a function');
})();

function log () {
  console.log('Some message');
}
