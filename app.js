// // if else

// let num = 5;

// if (num > 50) {
//   console.log('Num > 50');
// } else if (num == 50) {
//   console.log('Num = 50');
// } else {
//   console.log('Num < 50');
// }

// // Ternary operator

// let num = 14;
// num = Number(num);
// console.log(num);
// let message = num % 2 ? 'odd' : 'even';

// console.log(`${num} is ${message}`);

// Logical Operators

let age = prompt('Enter age');
age = Number(age);
let member = true;
console.log(age);

let checkAge = age >= 18 ? 'allow' : 'deny';
console.log(checkAge);

if (age >= 18 && member) {
  console.log('Enter');
} else {
  console.log('🛑');
}
