'use strict';

// // Includes + ternary
// // const arr = [1, 2, 5, 8];

// // const isNumber = (val) => {
// //   let temp = val ? 'yes' : 'No';
// //   console.log(temp);
// // };
// // isNumber(arr.includes(5));
// // isNumber(arr.includes(8));
// // isNumber(arr.includes(81));
// // isNumber(arr.includes(1));

// const excludeNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// const randomNumber = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   let num = Math.floor(Math.random() * (max - min) + min);
//   return excludeNumbers.includes(num) ? randomNumber(min, max) : num;
// };

// for (let i = 0; i < 50; i++) {
//   let num = randomNumber(1, 20);
//   console.log(num);
// }

// Math Methods

const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

for (let i = 0; i < 50; i++) {
  console.log(i + 1, randomNumber(1, 11));
  randomNumber(1, 11);
}
