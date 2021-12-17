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

//

const arr = [21, 458, 897, 45, 214, 97, 5, 64];

const arrFilter = arr.filter((num) => num > 100).sort((a, b) => a - b);
const arrFilter2 = arr.filter((num) => num < 100).sort((a, b) => a - b);

console.log(arrFilter);
console.log(arrFilter2.sort());

for (let i = 0; i < 21; i += 3) {
  console.log(`For Loop:Loop: ${i}`);
}

let x = 0;

while (x < 100) {
  console.log(`While Loop:${x}`);
  x += 10;
}

let y = 5;
do {
  console.log(`Do while:${y}`);
  y += 2;
} while (y < 22);

// Objects + objects methods

const person = {
  name: 'Steve',
  lastName: 'Smith',
  age: 32,
  printName: function () {
    console.log(this.name + ' ' + this.lastName);
  },
  drive() {
    console.log(`${this.name} is driving!`);
  },
};

person.isMerried = true;
person['email'] = 'steve@gmail.com';

person;
person.printName();
person.drive();
