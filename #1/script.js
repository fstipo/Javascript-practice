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

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// // at method
// const arr = [24, 54, 162];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr.at(0));
// console.log(arr.at(1));

// // getting last element of array
// console.log(arr[arr.length - 1]);
// console.log(arr.splice(-1)[0]);
// console.log(arr.at(-1));

// // at works at the strings
// console.log('Hello'.at(0));
// console.log('Hello'.at(-1));

// Objects

function Car(color, type, topSpeed) {
  this.color = color;
  this.type = type;
  this.topSpeed = topSpeed;
}

const myCar = new Car('red', 'mazda', '250');
const myCar2 = new Car('green', 'ford', '450');

const arr = [
  'Franko',
  'Stipanov',
  43,
  true,
  null,
  undefined,
  ['one', 'two'],
  { type: 'mazda', age: 44 },
];

arr.length;
arr[0] = 24;
arr[1] = 124;
arr[2];
arr[3] = 58;
arr.push(25);
arr.unshift(1);

const arr2 = [5, 15, 2, 258, 145, 34, 52, 48];

arr2.filter((num) => num > 50);
arr2.filter((num) => num < 50);

for (let i = 0; i < 5; i++) console.log(`This is counter: ${i}`);

let x = 0;
while (x < 20) {
  console.log(`While counter: ${x}`);
  x += 2;
}

let y = 0;
do {
  y += 5;
  console.log(`This is do while: ${y}`);
} while (y > 50);

// Create object array with loop

let arrObject = [];

for (let i = 0; i < 10; i++) {
  let stat = i % 2 ? false : true;
  let temp = { name: `Lesson ${i + 1}`, status: stat };
  arrObject.push(temp);
}

console.log(arrObject);

const arrTrue = arrObject.filter((el) => {
  return !el.status;
});

console.log(arrTrue);
