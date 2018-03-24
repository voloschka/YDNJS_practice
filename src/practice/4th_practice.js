const count = 0;
const name = 'Monica';
const isAvailable = true;

const items = [];

const someAction = function () {
  log('in some action');
};

// Helper
function log (args) {
  return console.log(args);
}

function firstParameter (num) {
  return num + 1;
}

log(firstParameter(count));

function twoParameters (num, str) {
  log(`${num}, ${str}`);
}

twoParameters(count, name);

function arrayPush (str, num, marker) {
  items.push(str, num, marker);
  log(items);
}

arrayPush(name, count, isAvailable);

function learnCallback (callback) {
  callback();
}

learnCallback(someAction);
