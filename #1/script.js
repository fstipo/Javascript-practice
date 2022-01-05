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

// Number methods

const myNum1 = 12344.345;
const myNum2 = '13454';

console.log(typeof myNum1);
console.log(myNum1);
console.log(typeof myNum2);
console.log(myNum2);
console.log(typeof Number(myNum2));
console.log(myNum1.toFixed(1));
console.log(parseInt(myNum1));
