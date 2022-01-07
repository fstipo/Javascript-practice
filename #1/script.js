'use strict';

const excluded = [1, 3, 5, 7, 9, 10, 11, 13, 15, 16, 17, 18, 19];

const randomNumber = (min, max) => {
  min = Math.floor(min);
  max = Math.ceil(max);
  let num = Math.floor(Math.random() * (max - min)) + min;
  return excluded.includes(num) ? randomNumber(min, max) : num;
};

for (let i = 0; i < 10; i++) {
  console.log(randomNumber(10, 21));
}
