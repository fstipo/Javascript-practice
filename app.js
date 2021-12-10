/* Function recursion*/

// const loop = (x) => {
//   if (x >= 100) return;
//   console.log(x);
//   loop(x + 3);
// };

// loop(0);

// let secretNumber = 11;
// let guess;

// const guesser = () => {
//   guess = Number(prompt('Guess the number'));
//   console.log(guess);
//   if (guess === secretNumber) {
//     console.log('Number is correct');
//     console.log('You win!!! 🏆');
//     return;
//   } else {
//     let message = guess < secretNumber ? 'higher' : 'lower';
//     console.log(`Wrong GO ${message}!`);
//     guesser();
//   }
// };

// guesser();

// IIFE

(function () {
  console.log('Welcome');
  console.log('--------------');
})();

(function (firstName) {
  console.log(`My name is ${firstName}`);
  console.log('--------------');
})('Franko');

let result = (() => {
  return 'Hello World!';
})();

console.log(result);
