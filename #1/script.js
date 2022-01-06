'use strict';

const excludeNumbers = [1, 4, 8, 12, 16];

const randomNumbers = (min, max) => {
  min = Math.floor(min);
  max = Math.ceil(max);
  let num = Math.floor(Math.random() * (max - min)) + min;
  return excludeNumbers.includes(num) ? randomNumbers(min, max) : num;
};

for (let i = 0; i < 50; i++) {
  let num = randomNumbers(0, 20);
  console.log(num);
}
