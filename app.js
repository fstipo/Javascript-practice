// // Challenge #3

// let time = 24;
// console.log('time is ' + time);
// let output;

// if (time >= 4 && time <= 12) {
//   output = 'Good morning';
// } else if (time > 12 && time <= 18) {
//   output = 'Good afternoon';
// } else {
//   output = 'Good night';
// }
// console.log(output);

// Switch

const person = 'Toto';

switch (person) {
  case 'Toto':
    console.log(person + ' is not my friend');
    break;
  case 'Mara':
  case 'Angela':
    console.log(`Mara and Angela are here`);
    break;
  case 'Franko':
    console.log(`${person} is our teacher`);
    break;
  default:
    console.log('Hey Everybody');
}
