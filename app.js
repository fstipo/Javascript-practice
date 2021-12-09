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

// Return

const multiplier = (a, b) => {
  return a * b;
};

console.log(multiplier(100, 45));
console.log(multiplier(0, 45));
console.log(multiplier(2, 4));
console.log(multiplier(10, 5));

console.log(add2(4));
function add2(num) {
  return num + 2;
}
