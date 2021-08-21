'use strict'

const printObject = (ojects) => {
  console.log('---- Print Object ----');
  console.log(ojects);
}

const printUserById = (users, id) => {
  console.log(`---- Print user by ID = ${id} ----`);
  let usr = users.find(user => user.uid == id);
  console.log(usr);
}
//export nhieu lan cac ham kia ra
module.exports = {
  printObject, 
  printUserById
}