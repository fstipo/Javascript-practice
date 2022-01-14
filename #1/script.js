'use strict';

// getBoundingClientRect

// const BandList =

const inputEl = document.querySelector('input');
const btn = document.querySelector('.btn');

const randomNumber = (min, max) => {
  min = Math.floor(min);
  max = Math.ceil(max);
  // console.log(min, max);
  return Math.floor(Math.random() * (max - min)) + min;
};

for (let i = 0; i < 2; i++) {
  console.log(randomNumber(1, 22));
}
