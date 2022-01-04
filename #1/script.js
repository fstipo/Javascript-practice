// 'use strict';

// Number Methods
let num1 = 10000.6547;
let num2 = '123';

console.log(num1);
console.log(num2);
console.log(isNaN(num1));
console.log(isNaN(num2));
console.log(num1.toFixed(2));
console.log(typeof num1.toFixed(1));
console.log(parseInt(num2));
console.log(Number(true));
console.log(Number('true'));
console.log('------------------------------------------');

// String Methods

const myString =
  'Hello World, JavaScript is the best programming language in the world';

// console.log(myString.length);
// console.log(myString);
// console.log(myString.trim());
// console.log(myString.toLowerCase().trim());
// console.log(myString.toUpperCase().trim());
// console.log(myString.trim().split(' '));
// console.log(myString.charAt(4));
// console.log(myString.charAt(14));
// console.log(myString[7]);
console.log(myString.slice(2, 5));
console.log(myString.slice(13, 23));
console.log(myString.substring(13, 23));
console.log(myString.substr(13, 23));
console.log(myString.startsWith('Hello'));

console.log(myString.replace('best', 'bebebe'));
console.log(myString.indexOf('world'));
console.log(myString.indexOf('World'));
console.log(myString.search('the'));
console.log(myString.search('thee'));
