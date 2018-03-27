let i = 0;

for (;;) {
  i++;
  if (i > 5) {
    break;
  }
  console.log('List #', i);
}

console.log(i);

let count = 1;

while (count <= 10) {
  console.log('Count #', count);
  count ++;
}

let doCount = 1;

do {
  console.log('DoCount #', doCount);
  doCount ++;
} while (doCount <= 6);
