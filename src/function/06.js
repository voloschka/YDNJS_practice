// Work with asynchronous code

function callback () {
  console.log('Hello');
}

setTimeout(callback, 3000);

setTimeout(function () {
  console.log('hi');
}, 1000);

const timeoutId = setTimeout(() => {
  const a = 'Heya';
  console.log(a);
}, 2000);

let count = 1;

const intervalId = setInterval(function () {
  count ++;
  //
  // count += 1
  //
  // count = count + 1
  //
  console.log(count);

  if (count === 3) {
    clearTimeout(timeoutId);
  }

  if (count === 10) {
    clearInterval(intervalId);
  }

}, 500);
