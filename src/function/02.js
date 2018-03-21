/**
 * @description
 * Detailed function analysis
 */

/* keyword */ function /* name */ someAction /* parameter placeholder*/ (someParameter) /* body */ { }

/* function calling */

someAction(1);

function id () {
  return Date.now();
}

const userOneId = id();
const userTwoId = id();

const _userName = 'Olko';

function createNewUser () {
    
  console.log(_userName);

  const userName = 'Monica';
  let userLocation = 'Lviv';

  userLocation = userLocation.toLocaleUpperCase();

  return {
    name: userName,
    location: userLocation
  };    
}

const newUser = createNewUser();
console.log(newUser);
