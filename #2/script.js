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

/////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for of loop

// for (const movement of movements) {
//   if (movement > 0) console.log(`Income: ${movement}`);
//   else if (movement < 0) console.log(`Consumption: ${Math.abs(movement)}`);
// }
// console.log('-------forEach------');

// // forEach
// movements.forEach(movement => {
//   if (movement > 0) console.log(`Income: ${movement}`);
//   else if (movement < 0) console.log(`Consumption: ${Math.abs(movement)}`);
// });
// console.log('------for of with index------');

// // for of with index
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) console.log(`${i + 1}:Income ${movement}`);
//   else if (movement < 0)
//     console.log(`${i + 1}:Consumption ${Math.abs(movement)}`);
// }
// console.log('-------forEach with index------');
// // forEach with index
// movements.forEach((movement, ind, arr) => {
//   if (movement > 0) console.log(`${ind + 1}:Income ${movement}`);
//   else if (movement < 0)
//     console.log(`${ind + 1}:Consumption ${Math.abs(movement)}`);
//   console.log(arr[ind]);
// });

// const car = {
//   color: 'red',
//   topSpeed: 300,
//   model: 'mustang',
//   company: 'ford',
//   turnOn() {
//     console.log('Started');
//   },
//   drive: function () {
//     console.log('You are driving ' + this.model);
//   },
// };

// car.year = 2015;
// car['price'] = 5000;

// car;

// car.turnOn();
// car.drive();

// // Functions to create objects

// function Car(miles, company, color, price) {
//   // this.miles = miles;
//   // this.company = company;
//   // this.color = color;
//   // this.price = price;
//   miles;
//   company;
//   color;
//   price;
// }

// const myCar1 = new Car(220, 'mazda', 'green', '155');
// const myCar2 = new Car(320, 'bmw', 'pink', '300');

// console.log(myCar1);
// console.log(myCar2);

// // array

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

// theList.forEach(el => {
//   console.log(`${el}: ${typeof el}`);
// });

// const a = num => num + 2;

// console.log(a(2));

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// // foreach with map
// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GPT', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach((value, _, map) => {
//   console.log(`${value}: ${value}`);
// });

const car = {
  color: 'red',
  topSpeed: 300,
  model: 'mustang',
  turnOn: function () {
    console.log('Started');
  },
  drive() {
    console.log('I am driving');
  },
};
car.price = 254;
car['company'] = 'ford';

car;

const arr = ['a', 1, 2];

car.drive();
car.turnOn();

function Car(color, topSpeed, model) {
  this.color = color;
  this.topSpeed = topSpeed;
  this.model = model;
}

const myCar = new Car('red', '200', 'ford');
const myCar2 = new Car('blue', '350', 'mazda');

// Arrays

const theList = [
  'Franko',
  'Stipanov',
  true,
  44,
  null,
  undefined,
  { test: 'one', score: 500 },
  ['one', 'two'],
];

theList[0];
theList[1];
theList[2];
theList[3];
theList[4];
theList[5];
theList[6].test;
theList[6].score;
theList[6]['test'];
theList[7][0];
theList[7][1];
theList.length;
