'use strict';
// Random Number Generator =

const inputEl = document.querySelector('input');
const btn = document.querySelector('.btn');
const msg = document.querySelector('.msg');

const randomNumber = (min, max) => {
  min = Math.floor(min);
  max = Math.ceil(max);
  // console.log(min, max);
  return Math.floor(Math.random() * (max - min)) + min;
};

for (let i = 0; i < 2; i++) {
  msg.innerHTML = randomNumber(1, 22);
}
