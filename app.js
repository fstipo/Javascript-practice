// // Javascript functions

// const message = 'Hello World';
// let num = 1;

// const counter = () => {
//   console.log(message);
//   console.log(`${num} times run`);
//   console.log('------------------------');
//   num++;
// };

// counter();
// counter();
// counter();

// const addNumberTen = (num) => {
//   console.log(num + 10);
//   console.log('------------------------');
// };

// addNumberTen(10);
// addNumberTen(50);
// addNumberTen(100);

// Default values

const defaultValues = (num1 = 1, num2 = 10) => {
  console.log(num1, num2);
};
defaultValues();
defaultValues(5);
defaultValues(undefined, undefined);
defaultValues(20, 40);

console.log('---------------');

const defaultValues2 = (num1, num2) => {
  num1 = num1 || 15;
  num2 = num2 || 50;
  console.log(num1, num2);
};

defaultValues2();
defaultValues2(25, 10);
defaultValues2(undefined, 10);
defaultValues2(24, undefined);

console.log('---------------');

const defaultValues3 = (num1, num2) => {
  num1 = typeof num1 !== 'undefined' ? num1 : 580;
  num2 = typeof num2 !== 'undefined' ? num2 : 880;
  console.log(num1, num2);
};

defaultValues3();
defaultValues3(125, 100);
defaultValues3(undefined, 105);
defaultValues3(240, undefined);
