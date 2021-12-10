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

// And operator
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Plaza',
  owner: 'John Doe',
};

// rest2.owner = rest2.owner && 'ANONYMOUS';
// rest1.owner = rest1.owner && 'ANONYMOUS';

//&& And operator &&
rest2.owner &&= 'ANONYMOUS';
rest1.owner &&= 'ANONYMOUS';
console.log(rest2);
console.log(rest1);
