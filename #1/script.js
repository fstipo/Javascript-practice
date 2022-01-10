'use strict';
const d = new Date();
console.log(d.getTime());
console.log(d);
console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());

const today = Date.now();
console.log(today);

const myBirthday = new Date('1977-11-30');
console.log(myBirthday);

const sum = today - myBirthday;
let milSeconds = sum / 1000 / 60 / 60 / 24 / 365;

console.log(milSeconds);
let yearsOld = parseInt(sum / 1000 / 60 / 60 / 24 / 365);
console.log('Years:' + yearsOld);
const months = (milSeconds - 44) * 12;
console.log('months:' + Math.floor(months));
const days = (months - 1) * 24;
console.log('days:' + parseInt(days));
