// 'use strict';

// Math methods

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

// console.log(getRandomInt(1, 11));

for (let i = 0; i < 10; i++) {
  console.log(getRandomInt(1, 6));
}
