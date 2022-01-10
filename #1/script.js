'use strict';

const numbers = [14, 2, 19, 6, 8, 13, 11, 12, 16, 17, 18, 19, 20];

console.log(numbers.includes(2));
console.log(numbers.includes(12));
console.log(numbers.includes(14));
console.log(numbers.includes(10));

const isIncluded = (num) => {
  console.log(num ? 'yes' : 'No');
};

isIncluded(numbers.includes(2));
isIncluded(numbers.includes(12));
isIncluded(numbers.includes(14));
isIncluded(numbers.includes(10));
isIncluded(numbers.includes(3));

const randomNumber = (min, max) => {
  min = Math.floor(min);
  max = Math.ceil(max);
  let num = Math.floor(Math.random() * (max - min) + min);
  return numbers.includes(num) ? randomNumber(min, max) : num;
};

for (let i = 0; i <= 10; i++) {
  console.log(randomNumber(1, 21));
}
