// 'use strict';

// // Logical Assignment operator (Jonas)

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Plaza',
//   owner: 'John Doe',
// };

// // OR assignment operator

// rest1.numGuests = rest1.numGuests || 10;
// // Logical operator
// rest1.numGuests || 10;

// rest2.numGuests = rest2.numGuests ||= 10;
// // Logical operator
// rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);

// // Problem 0

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// rest1.numGuests ??= 10;

// //??

// // nullish operator (null or undefined)
// const rest2 = {
//   name: 'La Plaza',
//   owner: 'John Doe',
//   numGuests: 0,
// };

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

// // And operator
// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Plaza',
//   owner: 'John Doe',
// };

// // rest2.owner = rest2.owner && 'ANONYMOUS';
// // rest1.owner = rest1.owner && 'ANONYMOUS';

// //&& And operator &&
// rest2.owner &&= 'ANONYMOUS';
// rest1.owner &&= 'ANONYMOUS';
// console.log(rest2);
// console.log(rest1);

// const loop = (x) => {
//   console.log(x);
//   if (x >= 200) return;
//   loop(x + 4);
// };

// loop(0);

// // Recursion
// const secretNumber = 34;
// let guess;
// let counter = 0;

// const guesser = () => {
//   guess = Number(prompt('Chose number: 1-100'));
//   console.log(guess);
//   counter++;
//   if (guess === secretNumber) {
//     console.log(`${guess} is correct.You win 🏆. Counter:${counter}
//     `);
//   } else {
//     const message = guess < secretNumber ? 'Try higher ⬆' : 'Try lower ⬇';
//     console.log(`Wrong! ${message}`);
//     guesser();
//   }
// };

// // guesser();

// (function (x) {
//   console.log(x * 15);
// })(10);

// let add5 = ((x) => x + 5)(105);

// console.log(add5);

// let add6 = ((x) => {
//   let temp = x + 6;
//   return temp;
// })(12);

// console.log(add6);
// console.log(add6);

// Logical assignmant operator

const rest1 = {
  name: 'La plaza',
  numGuests: 0,
};

const rest2 = {
  name: 'Luigi bar',
  owner: 'Luigi',
};

// rest2.numGuests = rest2.numGuests || 15;
rest2.numGuests ||= 25;
// rest1.numGuests ||= 25;
rest1.numGuests ??= 25;

// rest2.owner = rest2.owner && 'ANONYMOUS';
rest2.owner &&= 'ANONYMOUS';
rest1.owner &&= 'ANONYMOUS';

console.log(rest2);
console.log(rest1);
