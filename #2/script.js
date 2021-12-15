// 'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////

// Arrays

// const myArray = ['a', 'hello', 4, 8, 2, 'world', 'javascript', 'course', 99, 1];
// const myArray2 = [5, 12, 8, 130, 44];

// myArray.sort();
// myArray2.sort();
// myArray.reverse();

// console.log(myArray.indexOf(50));

// if (myArray.indexOf(50) === -1) {
//   console.log('Element not found');
// }

// let newArray = myArray.concat(myArray2);
// let newArray2 = myArray2.concat(myArray);

// let found = myArray2.find(function (el) {
//   return el > 10;
// });

// Loops

// for (let counter = 0; counter < 5; counter++) {
//   console.log(`For loop is counting:${counter}`);
// }

// let counter = 0;
// while (counter < 5) {
//   console.log(`While loop is counting:${counter}`);
//   counter++;
// }

// let i = 0;

// do {
//   i += 1;
//   console.log('Do while loop ' + i);
// } while (i < 15);

// loop

let arr = [];

for (let i = 1; i < 10; i++) {
  let stat = i % 2 ? true : false;
  let temp = { name: `Lesson ${i}`, status: stat };
  console.log(temp);
  arr.push(temp);
}

console.log(arr);

const getTrue = arr.filter(function (el) {
  console.log(el);
  return el.status;
});

console.log(getTrue);
