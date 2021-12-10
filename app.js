// // Function Expression
// const add1 = (num) => {
//   console.log(num * 5);
// };

// // Function declaration
// function add2(num) {
//   console.log(num * 5);
// }

// add1(2);

// // Function scope
// let a = 'Hello';
// let b;

// const test1 = () => {
//   b = 'World';
//   console.log(`${a} ${b}`);
// };

// test1();
// console.log(b);

/* Function recursion*/

// const loop = (x) => {
//   if (x >= 100) return;
//   console.log(x);
//   loop(x + 3);
// };

// loop(0);

let secretNumber = 11;
let guess;

const guesser = () => {
  guess = Number(prompt('Guess the number'));
  console.log(guess);
  if (guess === secretNumber) {
    console.log('Number is correct');
    console.log('You win!!! 🏆');
    return;
  } else {
    let message = guess < secretNumber ? 'higher' : 'lower';
    console.log(`Wrong GO ${message}!`);
    guesser();
  }
};

guesser();
