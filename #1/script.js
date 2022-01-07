'use strict';

const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

console.log(numbers.includes(1));
console.log(numbers.includes(2));
console.log(numbers.includes(13));
console.log(numbers.includes(21));

const isIncluded = (arr) => {
  let temp = arr ? 'Yes' : 'No';
  console.log(temp);
};

isIncluded(numbers.includes(2));
isIncluded(numbers.includes(12));
isIncluded(numbers.includes(22));
isIncluded(numbers.includes(11));
isIncluded(numbers.includes(1));
isIncluded(numbers.includes(3));
