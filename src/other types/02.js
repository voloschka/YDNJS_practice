const userAge = 28;
const isWorkingTime = true;

// && - logical and
// || - logical or

if (userAge > 18 && isWorkingTime) {
  console.log('Alcohol is allowed');
} else {
  console.log('Alcohol is not allowed');
}

const loginAttempts = 0;

if (loginAttempts === 1) {
  console.log('Welcome to system');
} else if (loginAttempts >= 10) {
  console.log('Mail invitation');
} else if (loginAttempts > 0 && loginAttempts >= 5) {
  console.log('Push notification');
} else if (loginAttempts === 0) {
  console.log('Please confirm your email');
} else {
  console.log('Have a nice day!');
}
