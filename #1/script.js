'use strict';

const now = new Date();

// const month = date.getMonth();
// const day = date.getDay();
// const year = date.getFullYear();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

const birthDay = new Date(1977, 11, 30);
console.log(birthDay.getTime());

const sumYears = now - birthDay;
console.log(sumYears / 1000 / 60 / 60 / 24 / 365);
