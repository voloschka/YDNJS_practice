const myName = 'Natalia';
let mySurname = "Voloshyn";
let workAddress = 'Naukova 7d';

let additive = 57;

const wtf = '2' + 3; // warning
console.log(wtf);


let domainName = 'google.com';
let userName = 'Monica';
let userId = additive + '&';
let itemCount = 15;

const url = `http://${domainName}/${userName}/${userId}/${itemCount}`;
console.log(url);

const timestamp = Date.now();
console.log(timestamp);

let fileName = 'Log' + timestamp + '.txt';
console.log(fileName);

fileName = `log_${timestamp}.txt`;
console.log(fileName);

const urlLength = url.length;
console.log(urlLength);

console.log(workAddress.toUpperCase());