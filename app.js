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

// Function recursion

const loop = (x) => {
  if (x >= 10) return;
  console.log(x);
  loop(x + 2);
};
loop(0);
loop(5);

let secretNumber = 8;
let guess;
let counter = 0;

const guesser = () => {
  let guess = Number(
    prompt(`Guess the number. Enter number 0 - 50
  `)
  );
  console.log(guess, secretNumber);
  counter++;

  if (guess === secretNumber) {
    console.log(`${guess} is correct number.`);
    console.log(`You are winner 🏆`);
    console.log('Counter:' + counter);
    return;
  } else if (guess < secretNumber) {
    console.log('Your number is smaller!', 'Counter: ' + counter);
    guesser();
  } else if (guess > secretNumber) {
    console.log('Your number is bigger!', 'Counter: ' + counter);
    guesser();
  } else {
    counter++;
    console.log('WRONG!', 'Counter: ' + counter);
    guesser();
  }
};

guesser();
