'use strict';

const now = Date.now();

// const month = date.getMonth();
// const day = date.getDay();
// const year = date.getFullYear();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

const birthDay = new Date(1977, 11, 30);
console.log(birthDay.getTime());

const sumYears = now - birthDay;

const years = parseInt(sumYears / 1000 / 60 / 60 / 24 / 365);
const days = parseInt(sumYears / 1000 / 60 / 60 / 24);
const hours = parseInt(sumYears / 1000 / 60 / 60);
const minutes = parseInt(sumYears / 1000 / 60);
const seconds = parseInt(sumYears / 1000);
const milSeconds = parseInt(sumYears);
