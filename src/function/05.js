// Recursion

let counter = 1;

function log (n) {
  n -= 1;
  counter += 1;
  if (n === 0) {
    return;
  }
  log(n);
}

log(5);
console.log(counter);
