/**
 * @description
 * Introduction to Object properties
 */

const myUser = {
  id: 12,
  name: 'Monica',
  age: 20,
  legalAge: true
};

console.log(myUser);

myUser.jobTitle = 'librarian';
console.log(myUser);

const monica = Object.create(myUser);

monica.id = 30;
console.log(monica);

const adminUser = Object.assign({}, myUser);
console.log('Admin:', adminUser);

// adminUser.name = 'OLKO';

console.log(adminUser, myUser);

const cloneIt = myUser;
myUser.name = 'Natalia';
console.log(cloneIt);
