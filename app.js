// // Switch

// const person = 'Toto';

// switch (person) {
//   case 'Toto':
//     console.log(person + ' is not my friend');
//     break;
//   case 'Mara':
//   case 'Angela':
//     console.log(`Mara and Angela are here`);
//     break;
//   case 'Franko':
//     console.log(`${person} is our teacher`);
//     break;
//   default:
//     console.log('Hey Everybody');
// }

// Javascript functions

const message = 'Hello World';
let num = 1;

const counter = () => {
  console.log(message);
  console.log(`${num} times run`);
  console.log('------------------------');
  num++;
};

counter();
counter();
counter();

const addNumberTen = (num) => {
  console.log(num + 10);
  console.log('------------------------');
};

addNumberTen(10);
addNumberTen(50);
addNumberTen(100);
