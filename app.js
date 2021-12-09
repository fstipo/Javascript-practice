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

const btns = document.querySelectorAll('button');

btns[0].onclick = message1;
btns[1].onclick = message2;
btns[2].onclick = message3;

let count1 = 0;
let count2 = 0;
let count3 = 0;

const message = () => {
  console.log(count1, count2, count3);
};

function message1() {
  count1++;
  message();
}

function message2() {
  count2++;
  message();
}

function message3() {
  count3++;
  message();
}
