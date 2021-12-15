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

// const theList = [
//   'Franko',
//   'Stipanov',
//   true,
//   44,
//   null,
//   undefined,
//   { test: 'one', score: 500 },
//   ['one', 'two'],
// ];

// theList[0];
// theList[1];
// theList[2];
// theList[3];
// theList[4];
// theList[5];
// theList[6].test;
// theList[6].score;
// theList[6]['test'];
// theList[7][0];
// theList[7][1];
// theList.length;

// Create object with function
function Car(color, model, topSpeed) {
  this.color = color;
  this.model = model;
  this.topSpeed = topSpeed;
}

const myCar = new Car('brown', 'ctx', '200');
const myCar2 = new Car('red', 'ford', '120');

const arr = [
  'Franko',
  'Stipanov',
  true,
  44,
  null,
  undefined,
  { price: 12, name: 'Pedro' },
  ['one', 'two'],
];

arr[0];
arr[1];
arr[2];
arr[3];
arr[4];
arr[5];
arr[6][0];
arr[6][1];
arr[7]['price'];
arr[7].name;

arr.length;
let temp = Array.isArray(arr);
arr[1] = 'Hello World';
temp = arr.indexOf('Franko');
temp = arr.indexOf('Stipanov');
arr.includes('Franko');
arr;
arr.push('Pushed');
arr.unshift('unshift');
arr.shift();
arr.splice(1, 2);
arr;
arr.unshift('make me first');
arr;
