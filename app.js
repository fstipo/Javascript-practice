// // Return

// const multiplier = (a, b) => {
//   return a * b;
// };

// console.log(multiplier(100, 45));
// console.log(multiplier(0, 45));
// console.log(multiplier(2, 4));
// console.log(multiplier(10, 5));

// console.log(add2(4));
// function add2(num) {
//   return num + 2;
// }

let count1 = 0;
let count2 = 0;
let count3 = 0;

const message1 = () => {
  count1++;
  console.log(count1, count2, count3);
};

const message2 = () => {
  count2++;
  console.log(count1, count2, count3);
};

const message3 = () => {
  count3++;
  console.log(count1, count2, count3);
};
