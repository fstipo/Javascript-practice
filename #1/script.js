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

// String Methods

const str = '    Hello World,JavaScript is the best in the World!';

console.log(str);
console.log(str.length);
console.log(str.trim().length);
console.log(str.trim().toLocaleLowerCase());
console.log(str.trim().toLocaleUpperCase());
console.log(str.trim().toUpperCase().split(' '));
console.log(str.trim().toUpperCase().split(','));
console.log(str.trim().toUpperCase().split('L'));
console.log(str.trim().charAt('3'));
console.log(str.trim().charAt('6'));
console.log(str.trim()[6]);
console.log(str.trim().slice(6));
console.log(str.trim().slice(6, -7));
console.log(str.trim().slice(6, 10));
console.log(str.trim().substring(6, 15));
console.log(str.trim().replace('World', 'GOLD'));
console.log(str.trim().replaceAll('World', 'GOLD'));
console.log(str.trim().indexOf('W'));
console.log(str.trim().lastIndexOf('W'));
console.log(str.trim().search('best'));
