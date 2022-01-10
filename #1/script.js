'use strict';

const numbers = [14, 2, 19, 6, 8, 13, 11, 12];

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
