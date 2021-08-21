'use strict'

console.clear(); 

const module_data = require('./Demo12.module.data');

const users = module_data.data.users;
console.log(users);

const f = require('./Demo12.module.func');
f.sayHello();

let s = f.sayHi('Response message');
console.log(s);

//phai co require de no biet o dau? Cai nay la goi 
//ham truc tiep tu module chu khong thong qua bien
//nhu o phan tren nua.
const {printObject, printUserById} = require('./Demo12.module.array')
printObject(users);
printUserById(users, 3);